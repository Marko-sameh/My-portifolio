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
          <button onClick={onLogin} className="w-full bg-blue-500 text-white p-2 rounded">
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
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
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
          <textarea
            placeholder="Full Description (detailed project overview)"
            value={form.fullDescription}
            onChange={(e) => setForm({ ...form, fullDescription: e.target.value })}
            className="p-2 border rounded h-32"
            rows={6}
          />
          <textarea
            placeholder="Results & Impact (what was achieved)"
            value={form.results}
            onChange={(e) => setForm({ ...form, results: e.target.value })}
            className="p-2 border rounded h-24"
            rows={4}
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
              onChange={onMainImageUpload}
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
              <label className="block text-sm font-medium">Project Links:</label>
              <button type="button" onClick={addLink} className="bg-green-500 text-white px-3 py-1 rounded text-sm">
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
                  className="flex-1 p-2 border rounded"
                />
                <input
                  type="url"
                  placeholder="URL"
                  value={link.url}
                  onChange={(e) => updateLink(index, 'url', e.target.value)}
                  className="flex-1 p-2 border rounded"
                />
                <button type="button" onClick={() => removeLink(index)} className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                  ×
                </button>
              </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">Key Features:</label>
              <button type="button" onClick={addFeature} className="bg-green-500 text-white px-3 py-1 rounded text-sm">
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
                  className="flex-1 p-2 border rounded"
                />
                <button type="button" onClick={() => removeFeature(index)} className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                  ×
                </button>
              </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">Challenges & Solutions:</label>
              <button type="button" onClick={addChallenge} className="bg-green-500 text-white px-3 py-1 rounded text-sm">
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
                  className="flex-1 p-2 border rounded"
                />
                <button type="button" onClick={() => removeChallenge(index)} className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                  ×
                </button>
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Upload Additional Images:</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={onFileUpload}
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
            <button type="button" onClick={resetForm} className="bg-gray-500 text-white p-2 rounded">
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
                {project.showOnHome && (
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm mt-2">📍 Home Page</span>
                )}
                {project.links && project.links.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">Links:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" 
                           className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs hover:bg-blue-200">
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