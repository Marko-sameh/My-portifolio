import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { checkAuth } from '@/lib/auth';

const DB_PATH = path.join(process.cwd(), 'src/data/projects-db.json');

function readProjects() {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeProjects(projects) {
  fs.writeFileSync(DB_PATH, JSON.stringify(projects, null, 2));
}

// GET - Read single project
export async function GET(request, { params }) {
  const { id } = await params;
  const projects = readProjects();
  const project = projects.find(p => p.id == id);
  
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  
  return NextResponse.json(project);
}

// PUT - Update project
export async function PUT(request, { params }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const { id } = await params;
  const body = await request.json();
  const projects = readProjects();
  const index = projects.findIndex(p => p.id == id);
  
  if (index === -1) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  
  const updatedProject = {
    ...projects[index],
    title: body.title || projects[index].title,
    desc: body.desc || projects[index].desc,
    img: body.img !== undefined ? body.img : projects[index].img,
    images: body.images || projects[index].images,
    tag: body.tag || projects[index].tag,
    tech: body.tech ? (Array.isArray(body.tech) ? body.tech : body.tech.split(',').map(t => t.trim())) : projects[index].tech,
    updatedAt: new Date().toISOString()
  };
  
  projects[index] = updatedProject;
  writeProjects(projects);
  
  return NextResponse.json(updatedProject);
}

// DELETE - Delete project
export async function DELETE(request, { params }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const { id } = await params;
  const projects = readProjects();
  const index = projects.findIndex(p => p.id == id);
  
  if (index === -1) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  
  projects.splice(index, 1);
  writeProjects(projects);
  
  return NextResponse.json({ message: 'Project deleted' });
}