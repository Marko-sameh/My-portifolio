'use client';
import { useState, useEffect } from 'react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: '', desc: '', img: '', tag: '', tech: '' });
  const [editing, setEditing] = useState(null);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch('/api/projects', {
      headers: {
        'X-API-Key': 'api_key_xyz789abc123def456ghi789jkl012mno345pqr678stu901vwx234yza567bcd890'
      }
    });
    const data = await res.json();
    setProjects(data);
  };

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: adminKey })
    });

    const data = await res.json();
    if (data.success) {
      setAuthToken(data.token);
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    if (!files.length) return;

    setUploading(true);
    const formData = new FormData();
    Array.from(files).forEach(file => formData.append('files', file));

    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'X-API-Key': 'api_key_xyz789abc123def456ghi789jkl012mno345pqr678stu901vwx234yza567bcd890'
      },
      body: formData
    });

    const data = await res.json();
    setImages(prev => [...prev, ...data.files]);
    setUploading(false);
  };

  const handleMainImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('files', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'X-API-Key': 'api_key_xyz789abc123def456ghi789jkl012mno345pqr678stu901vwx234yza567bcd890'
      },
      body: formData
    });

    const data = await res.json();
    setForm({ ...form, img: data.files[0] });
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editing ? `/api/projects/${editing}` : '/api/projects';
    const method = editing ? 'PUT' : 'POST';

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
        'X-API-Key': 'api_key_xyz789abc123def456ghi789jkl012mno345pqr678stu901vwx234yza567bcd890'
      },
      body: JSON.stringify({ ...form, images, tech: form.tech.split(',').map(t => t.trim()) })
    });

    setForm({ title: '', desc: '', img: '', tag: '', tech: '' });
    setImages([]);
    setEditing(null);
    fetchProjects();
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      desc: project.desc,
      img: project.img,
      tag: project.tag,
      tech: Array.isArray(project.tech) ? project.tech.join(', ') : project.tech
    });
    setImages(project.images || []);
    setEditing(project.id);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'X-API-Key': 'api_key_xyz789abc123def456ghi789jkl012mno345pqr678stu901vwx234yza567bcd890'
      }
    });
    fetchProjects();
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  if (!isAuthenticated) {
    return (
      <div className="p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Admin Key"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Projects CRUD</h1>
        <button onClick={() => setIsAuthenticated(false)} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mb-8 p-6 border rounded-lg">
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Project Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <textarea
            placeholder="Description"
            value={form.desc}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            className="p-2 border rounded"
            required
          />

          <div>
            <label className="block text-sm font-medium mb-2">Main Image:</label>
            {/* <input
              type="url"
              placeholder="Main Image URL"
              value={form.img}
              onChange={(e) => setForm({...form, img: e.target.value})}
              className="p-2 border rounded w-full mb-2"
            /> */}
            <input
              type="file"
              accept="image/*"
              onChange={handleMainImageUpload}
              className="p-2 border rounded w-full"
            />
            {form.img && <img src={form.img} alt="Main" className="w-20 h-20 object-cover rounded mt-2" />}
          </div>

          <input
            type="text"
            placeholder="Tag (e.g., Fullstack)"
            value={form.tag}
            onChange={(e) => setForm({ ...form, tag: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Technologies (comma separated)"
            value={form.tech}
            onChange={(e) => setForm({ ...form, tech: e.target.value })}
            className="p-2 border rounded"
          />

          <div>
            <label className="block text-sm font-medium mb-2">Upload Additional Images:</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              className="p-2 border rounded w-full"
            />
            {uploading && <p className="text-blue-500 mt-2">Uploading...</p>}
          </div>

          {images.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-2">Additional Images:</p>
              <div className="flex flex-wrap gap-2">
                {images.map((img, index) => (
                  <div key={index} className="relative">
                    <img src={img} alt="" className="w-20 h-20 object-cover rounded" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {editing ? 'Update' : 'Add'} Project
          </button>
          {editing && (
            <button type="button" onClick={() => { setEditing(null); setForm({ title: '', desc: '', img: '', tag: '', tech: '' }); setImages([]); }} className="bg-gray-500 text-white p-2 rounded">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.id} className="p-6 border rounded-lg">
            <div className="flex gap-4">
              {project.img && (
                <img src={project.img} alt={project.title} className="w-32 h-32 object-cover rounded" />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.desc}</p>
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mt-2">{project.tag}</span>
                <div className="flex flex-wrap gap-1 mt-2">
                  {Array.isArray(project.tech) ? project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 px-2 py-1 rounded text-xs">{tech}</span>
                  )) : <span className="bg-gray-100 px-2 py-1 rounded text-xs">{project.tech}</span>}
                </div>
              </div>
            </div>

            {project.images && project.images.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Additional Images:</p>
                <div className="flex flex-wrap gap-2">
                  {project.images.map((img, i) => (
                    <img key={i} src={img} alt="" className="w-20 h-20 object-cover rounded" />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4 space-x-2">
              <button onClick={() => handleEdit(project)} className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">
                Edit
              </button>
              <button onClick={() => handleDelete(project.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}