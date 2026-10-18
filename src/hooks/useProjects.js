"use client";
import { useState, useEffect, useRef } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const cacheRef = useRef({ data: null, timestamp: 0 });
  const [form, setForm] = useState({
    title: "",
    desc: "",
    fullDescription: "",
    results: "",
    img: "",
    tag: "",
    tech: "",
    showOnHome: false,
  });
  const [links, setLinks] = useState([]);
  const [features, setFeatures] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [editing, setEditing] = useState(null);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Check active NextAuth session on mount to keep admin logged in on refresh
  useEffect(() => {
    let isMounted = true;
    const checkActiveSession = async () => {
      try {
        const { getSession } = await import("next-auth/react");
        const session = await getSession();
        if (isMounted && session?.user) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error("Session verification error:", err);
      } finally {
        if (isMounted) setIsCheckingAuth(false);
      }
    };
    checkActiveSession();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchData = async () => {
      try {
        const res = await fetch("/api/projects", {
          headers: { "X-API-Key": API_KEY },
          signal: abortController.signal
        });
        const data = await res.json();
        if (Array.isArray(data)) {
          setProjects(data);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Failed to fetch projects:', error);
        }
      }
    };
    
    fetchData();
    
    return () => abortController.abort();
  }, []);

  const fetchProjects = async () => {
    // Check cache first
    const now = Date.now();
    if (cacheRef.current.data && (now - cacheRef.current.timestamp) < CACHE_DURATION) {
      setProjects(cacheRef.current.data);
      return;
    }

    try {
      const res = await fetch("/api/projects", {
        headers: { "X-API-Key": API_KEY },
      });
      const data = await res.json();
      if (Array.isArray(data)) {
        setProjects(data);
        // Update cache
        cacheRef.current = { data, timestamp: now };
      }
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  const handleLogin = async (password) => {
    try {
      const { signIn } = await import("next-auth/react");
      const res = await signIn("credentials", {
        password,
        redirect: false
      });

      if (res?.ok) {
        setIsAuthenticated(true);
        return { success: true };
      }

      const errorMsg = res?.error || "";
      if (errorMsg.startsWith("LOCKED:")) {
        const seconds = parseInt(errorMsg.replace("LOCKED:", ""), 10) || 900;
        return {
          success: false,
          isLocked: true,
          retryAfterSeconds: seconds,
          error: `Security lockout: Too many failed attempts. Please wait ${Math.ceil(seconds / 60)} minute(s).`
        };
      }

      if (errorMsg.startsWith("INVALID:")) {
        const remaining = parseInt(errorMsg.replace("INVALID:", ""), 10);
        return {
          success: false,
          remainingAttempts: remaining,
          error: `Invalid password. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining before lockout.`
        };
      }

      return {
        success: false,
        error: "Invalid administrator credentials. Access denied."
      };
    } catch (err) {
      return {
        success: false,
        error: "Authentication service error. Please try again."
      };
    }
  };

  const handleFileUpload = async (files) => {
    if (!files.length) return;

    setUploading(true);
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("files", file));

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { 
          "X-API-Key": API_KEY,
          "Authorization": `Bearer ${authToken}`
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.files) {
        setImages((prev) => [...prev, ...data.files]);
      } else {
        console.error('Upload failed:', data.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleMainImageUpload = async (file) => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("files", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { 
          "X-API-Key": API_KEY,
          "Authorization": `Bearer ${authToken}`
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.files?.[0]) {
        setForm((prev) => ({ ...prev, img: data.files[0] }));
      } else {
        console.error('Upload failed:', data.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editing ? `/api/projects/${editing}` : "/api/projects";
    const method = editing ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify({
        ...form,
        images,
        links,
        features,
        challenges,
        tech: form.tech.split(",").map((t) => t.trim()),
      }),
    });

    resetForm();
    fetchProjects();
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      desc: project.desc,
      fullDescription: project.fullDescription || '',
      results: project.results || '',
      img: project.img,
      tag: project.tag,
      tech: Array.isArray(project.tech)
        ? project.tech.join(", ")
        : project.tech,
      showOnHome: project.showOnHome || false,
    });
    setImages(project.images || []);
    setLinks(project.links || []);
    setFeatures(project.features || []);
    setChallenges(project.challenges || []);
    setEditing(project.id);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "X-API-Key": API_KEY,
      },
    });
    fetchProjects();
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setForm({ title: "", desc: "", fullDescription: "", results: "", img: "", tag: "", tech: "", showOnHome: false });
    setImages([]);
    setLinks([]);
    setFeatures([]);
    setChallenges([]);
    setEditing(null);
  };

  const logout = async () => {
    const { signOut } = await import("next-auth/react");
    await signOut({ redirect: false });
    setIsAuthenticated(false);
    setAuthToken("");
  };

  return {
    projects,
    form,
    setForm,
    editing,
    images,
    links,
    setLinks,
    features,
    setFeatures,
    challenges,
    setChallenges,
    uploading,
    isAuthenticated,
    isCheckingAuth,
    fetchProjects,
    handleLogin,
    handleFileUpload,
    handleMainImageUpload,
    handleSubmit,
    handleEdit,
    handleDelete,
    removeImage,
    resetForm,
    logout,
  };
};
