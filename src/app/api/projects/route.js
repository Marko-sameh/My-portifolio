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

// GET - Read all projects
export async function GET() {
  const projects = readProjects();
  return NextResponse.json(projects);
}

// POST - Create new project
export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const body = await request.json();
  const projects = readProjects();
  
  const newProject = {
    id: Date.now(),
    title: body.title,
    desc: body.desc,
    img: body.img || '',
    images: body.images || [],
    tag: body.tag,
    tech: Array.isArray(body.tech) ? body.tech : body.tech?.split(',').map(t => t.trim()) || [],
    createdAt: new Date().toISOString()
  };
  
  projects.push(newProject);
  writeProjects(projects);
  
  return NextResponse.json(newProject, { status: 201 });
}