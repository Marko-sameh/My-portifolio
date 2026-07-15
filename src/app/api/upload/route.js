import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { existsSync } from 'fs';

export async function POST(request) {
  const session = await getServerSession(authOptions);
  const apiKey = request.headers.get('x-api-key');
  
  if (!session && apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const data = await request.formData();
  const files = data.getAll('files');
  
  if (!files || files.length === 0) {
    return NextResponse.json({ error: 'No files uploaded' }, { status: 400 });
  }

  const uploadedFiles = [];
  const uploadDir = path.join(process.cwd(), 'public/uploads');
  
  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true });
  }

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const filename = `${Date.now()}-${file.name.replace(/\s/g, '_')}`;
    const filepath = path.join(uploadDir, filename);
    
    await writeFile(filepath, buffer);
    uploadedFiles.push(`/api/uploads/${filename}`);
  }

  return NextResponse.json({ files: uploadedFiles });
}