'use client';
import { useState, useEffect, useCallback } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const EMPTY = { title: '', company: '', period: '', current: true, position: 0 };
const input = 'p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500';

// Career / experience manager. Rendered as a tab inside /projects-crud (shares its login).
export default function ExperienceAdmin() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(EMPTY);
  const [points, setPoints] = useState(['']);
  const [editing, setEditing] = useState(null);

  const load = useCallback(async () => {
    const res = await fetch('/api/experience', { cache: 'no-store' });
    const data = await res.json();
    if (Array.isArray(data)) setItems(data);
  }, []);

  useEffect(() => { load(); }, [load]);

  const reset = () => { setForm(EMPTY); setPoints(['']); setEditing(null); };

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(editing ? `/api/experience/${editing}` : '/api/experience', {
      method: editing ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json', 'X-API-Key': API_KEY },
      body: JSON.stringify({ ...form, points }),
    });
    if (!res.ok) return alert('Save failed');
    reset();
    load();
  };

  const edit = (item) => {
    setForm({ title: item.title, company: item.company, period: item.period, current: item.current, position: item.position });
    setPoints(item.points?.length ? item.points : ['']);
    setEditing(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const remove = async (id) => {
    if (!confirm('Delete this entry?')) return;
    await fetch(`/api/experience/${id}`, { method: 'DELETE', headers: { 'X-API-Key': API_KEY } });
    load();
  };

  return (
    <div>
      <form onSubmit={submit} className="mb-12 p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-xl grid gap-4">
        <input className={input} placeholder="Title (e.g. Full Stack Developer)" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <input className={input} placeholder="Company / place" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
        <input className={input} placeholder="Period (e.g. Mar 2026 - Present)" value={form.period} onChange={(e) => setForm({ ...form, period: e.target.value })} required />
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" checked={form.current} onChange={(e) => setForm({ ...form, current: e.target.checked })} />
            <span>Highlight (current / work)</span>
          </label>
          <label className="flex items-center gap-2">
            <span className="text-slate-300">Order (0 = first):</span>
            <input type="number" className={`${input} w-24`} value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} />
          </label>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-slate-300">Bullet points:</label>
            <button type="button" onClick={() => setPoints([...points, ''])} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Add Point</button>
          </div>
          {points.map((p, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input className={`flex-1 ${input}`} placeholder="Achievement / responsibility" value={p}
                onChange={(e) => setPoints(points.map((x, j) => (j === i ? e.target.value : x)))} />
              <button type="button" onClick={() => setPoints(points.filter((_, j) => j !== i))} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">×</button>
            </div>
          ))}
        </div>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold text-lg transition-colors">{editing ? '✓ Update' : '+ Add'} Experience</button>
        {editing && <button type="button" onClick={reset} className="bg-slate-600 hover:bg-slate-700 text-white p-3 rounded-lg font-semibold transition-colors">Cancel</button>}
      </form>

      <div className="grid gap-6">
        {items.map((item) => (
          <div key={item.id} className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-xl hover:border-slate-600 transition-colors">
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-blue-400">{item.company}</p>
              </div>
              <span className="text-sm bg-slate-700 px-3 py-1 rounded-full self-start">{item.period} · #{item.position}</span>
            </div>
            <ul className="mt-3 list-disc ml-5 text-slate-300 text-sm space-y-1">
              {item.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <div className="mt-4 space-x-2">
              <button onClick={() => edit(item)} className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">✏️ Edit</button>
              <button onClick={() => remove(item.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
