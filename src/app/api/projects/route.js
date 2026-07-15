import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

const prisma = new PrismaClient();

function parseJSON(val, def) {
  try {
    return JSON.parse(val);
  } catch {
    return def;
  }
}

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    const formattedProjects = projects.map(p => ({
      ...p,
      features: parseJSON(p.features, []),
      challenges: parseJSON(p.challenges, []),
      images: parseJSON(p.images, []),
      tech: parseJSON(p.tech, []),
      links: parseJSON(p.links, [])
    }));
    
    return NextResponse.json(formattedProjects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  const apiKey = request.headers.get('x-api-key');
  
  if (!session && apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const body = await request.json();
    
    const newProject = await prisma.project.create({
      data: {
        title: body.title,
        desc: body.desc,
        fullDescription: body.fullDescription || '',
        features: JSON.stringify(body.features || []),
        challenges: JSON.stringify(body.challenges || []),
        results: body.results || '',
        img: body.img || '',
        images: JSON.stringify(body.images || []),
        tag: body.tag,
        tech: JSON.stringify(Array.isArray(body.tech) ? body.tech : body.tech?.split(',').map(t => t.trim()) || []),
        links: JSON.stringify(body.links || []),
        showOnHome: body.showOnHome || false,
      }
    });
    
    return NextResponse.json({
      ...newProject,
      features: parseJSON(newProject.features, []),
      challenges: parseJSON(newProject.challenges, []),
      images: parseJSON(newProject.images, []),
      tech: parseJSON(newProject.tech, []),
      links: parseJSON(newProject.links, [])
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}