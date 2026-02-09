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

  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchData = async () => {
      try {
        const res = await fetch("/api/projects", {
          headers: { "X-API-Key": API_KEY },
          signal: abortController.signal
        });
        const data = await res.json();
        setProjects(data);
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
      setProjects(data);
      // Update cache
      cacheRef.current = { data, timestamp: now };
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  const handleLogin = async (password) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();
    if (data.success) {
      setAuthToken(data.token);
      setIsAuthenticated(true);
      return true;
    }
    return false;
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

  const logout = () => {
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
