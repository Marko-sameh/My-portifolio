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

export async function GET(request, { params }) {
  const { id } = await params;
  
  try {
    const project = await prisma.project.findUnique({
      where: { id }
    });
    
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    return NextResponse.json({
      ...project,
      features: parseJSON(project.features, []),
      challenges: parseJSON(project.challenges, []),
      images: parseJSON(project.images, []),
      tech: parseJSON(project.tech, []),
      links: parseJSON(project.links, [])
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions);
  const apiKey = request.headers.get('x-api-key');
  
  if (!session && apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const { id } = await params;
  
  try {
    const body = await request.json();
    
    const dataToUpdate = {};
    if (body.title !== undefined) dataToUpdate.title = body.title;
    if (body.desc !== undefined) dataToUpdate.desc = body.desc;
    if (body.fullDescription !== undefined) dataToUpdate.fullDescription = body.fullDescription;
    if (body.features !== undefined) dataToUpdate.features = JSON.stringify(body.features);
    if (body.challenges !== undefined) dataToUpdate.challenges = JSON.stringify(body.challenges);
    if (body.results !== undefined) dataToUpdate.results = body.results;
    if (body.img !== undefined) dataToUpdate.img = body.img;
    if (body.images !== undefined) dataToUpdate.images = JSON.stringify(body.images);
    if (body.tag !== undefined) dataToUpdate.tag = body.tag;
    if (body.tech !== undefined) {
      dataToUpdate.tech = JSON.stringify(Array.isArray(body.tech) ? body.tech : body.tech.split(',').map(t => t.trim()));
    }
    if (body.links !== undefined) dataToUpdate.links = JSON.stringify(body.links);
    if (body.showOnHome !== undefined) dataToUpdate.showOnHome = body.showOnHome;

    const updatedProject = await prisma.project.update({
      where: { id },
      data: dataToUpdate
    });
    
    return NextResponse.json({
      ...updatedProject,
      features: parseJSON(updatedProject.features, []),
      challenges: parseJSON(updatedProject.challenges, []),
      images: parseJSON(updatedProject.images, []),
      tech: parseJSON(updatedProject.tech, []),
      links: parseJSON(updatedProject.links, [])
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);
  const apiKey = request.headers.get('x-api-key');
  
  if (!session && apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const { id } = await params;
  
  try {
    await prisma.project.delete({
      where: { id }
    });
    return NextResponse.json({ message: 'Project deleted' });
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}