'use client';
import { useState } from 'react';
import { useProjects } from '../../hooks/useProjects';

export default function ProjectsPage() {
  const [adminKey, setAdminKey] = useState('');
  const {
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
    handleLogin,
    handleFileUpload,
    handleMainImageUpload,
    handleSubmit,
    handleEdit,
    handleDelete,
    removeImage,
    resetForm,
    logout
  } = useProjects();

  const addLink = () => {
    setLinks([...links, { label: '', url: '' }]);
  };

  const updateLink = (index, field, value) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const addFeature = () => {
    setFeatures([...features, '']);
  };

  const updateFeature = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const removeFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const addChallenge = () => {
    setChallenges([...challenges, '']);
  };

  const updateChallenge = (index, value) => {
    const newChallenges = [...challenges];
    newChallenges[index] = value;
    setChallenges(newChallenges);
  };

  const removeChallenge = (index) => {
    setChallenges(challenges.filter((_, i) => i !== index));
  };

  const onLogin = async () => {
    const success = await handleLogin(adminKey);
    if (!success) {
      alert('Invalid password');
    }
  };

  const onFileUpload = (e) => {
    handleFileUpload(e.target.files);
  };

  const onMainImageUpload = (e) => {
    handleMainImageUpload(e.target.files[0]);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="w-full max-w-md p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">Admin Login</h1>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Enter password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onLogin()}
              className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={onLogin} className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-medium transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-700">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects CRUD</h1>
          <button onClick={logout} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Logout
          </button>
        </div>

      <form onSubmit={handleSubmit} className="mb-12 p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-xl">
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Project Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Description"
            value={form.desc}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            className="p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Full Description (detailed project overview)"
            value={form.fullDescription}
            onChange={(e) => setForm({ ...form, fullDescription: e.target.value })}
            className="p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            rows={6}
          />
          <textarea
            placeholder="Results & Impact (what was achieved)"
            value={form.results}
            onChange={(e) => setForm({ ...form, results: e.target.value })}
            className="p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            rows={4}
          />

          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-300">Main Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={onMainImageUpload}
              className="p-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer w-full"
            />
            {form.img && <img src={form.img} alt="Main" className="w-24 h-24 object-cover rounded-lg mt-3 border-2 border-slate-600" />}
          </div>

          <input
            type="text"
            placeholder="Tag (e.g., Fullstack)"
            value={form.tag}
            onChange={(e) => setForm({ ...form, tag: e.target.value })}
            className="p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Technologies (comma separated)"
            value={form.tech}
            onChange={(e) => setForm({ ...form, tech: e.target.value })}
            className="p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.showOnHome}
              onChange={(e) => setForm({ ...form, showOnHome: e.target.checked })}
              className="w-4 h-4"
            />
            <span>Show on Home Page</span>
          </label>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-slate-300">Project Links:</label>
              <button type="button" onClick={addLink} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Add Link
              </button>
            </div>
            {links.map((link, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Link Label (e.g., Live Demo, GitHub)"
                  value={link.label}
                  onChange={(e) => updateLink(index, 'label', e.target.value)}
                  className="flex-1 p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="url"
                  placeholder="URL"
                  value={link.url}
                  onChange={(e) => updateLink(index, 'url', e.target.value)}
                  className="flex-1 p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="button" onClick={() => removeLink(index)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                  ×
                </button>
              </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-slate-300">Key Features:</label>
              <button type="button" onClick={addFeature} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Add Feature
              </button>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Feature description"
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  className="flex-1 p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="button" onClick={() => removeFeature(index)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                  ×
                </button>
              </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-slate-300">Challenges & Solutions:</label>
              <button type="button" onClick={addChallenge} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Add Challenge
              </button>
            </div>
            {challenges.map((challenge, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Challenge and how it was solved"
                  value={challenge}
                  onChange={(e) => updateChallenge(index, e.target.value)}
                  className="flex-1 p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="button" onClick={() => removeChallenge(index)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                  ×
                </button>
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-300">Upload Additional Images:</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={onFileUpload}
              className="p-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer w-full"
            />
            {uploading && <p className="text-blue-400 mt-2 animate-pulse">Uploading...</p>}
          </div>

          {images.length > 0 && (
            <div>
              <p className="text-sm font-semibold mb-2 text-slate-300">Additional Images:</p>
              <div className="flex flex-wrap gap-2">
                {images.map((img, index) => (
                  <div key={index} className="relative">
                    <img src={img} alt="" className="w-24 h-24 object-cover rounded-lg border-2 border-slate-600" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-7 h-7 text-sm font-bold shadow-lg transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold text-lg transition-colors">
            {editing ? '✓ Update' : '+ Add'} Project
          </button>
          {editing && (
            <button type="button" onClick={resetForm} className="bg-slate-600 hover:bg-slate-700 text-white p-3 rounded-lg font-semibold transition-colors">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.id} className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-xl hover:border-slate-600 transition-colors">
            <div className="flex gap-4">
              {project.img && (
                <img src={project.img} alt={project.title} className="w-40 h-40 object-cover rounded-xl border-2 border-slate-600" />
              )}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-slate-300 mt-2">{project.desc}</p>
                <span className="inline-block bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-lg text-sm mt-2 font-medium">{project.tag}</span>
                <div className="flex flex-wrap gap-1 mt-2">
                  {Array.isArray(project.tech) ? project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-slate-300 px-2 py-1 rounded-lg text-xs">{tech}</span>
                  )) : <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded-lg text-xs">{project.tech}</span>}
                </div>
                {project.showOnHome && (
                  <span className="inline-block bg-green-600/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-lg text-sm mt-2 font-medium">📍 Home Page</span>
                )}
                {project.links && project.links.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm font-semibold mb-1 text-slate-300">Links:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" 
                           className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-lg text-xs hover:bg-blue-600/30 transition-colors">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {project.images && project.images.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold mb-2 text-slate-300">Additional Images:</p>
                <div className="flex flex-wrap gap-2">
                  {project.images.map((img, i) => (
                    <img key={i} src={img} alt="" className="w-24 h-24 object-cover rounded-lg border-2 border-slate-600" />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4 space-x-2">
              <button onClick={() => handleEdit(project)} className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                ✏️ Edit
              </button>
              <button onClick={() => handleDelete(project.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
