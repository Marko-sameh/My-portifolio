import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { checkAuth } from '@/lib/auth';

export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const data = await request.formData();
  const files = data.getAll('files');
  
  if (!files || files.length === 0) {
    return NextResponse.json({ error: 'No files uploaded' }, { status: 400 });
  }

  const uploadedFiles = [];

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const filename = `${Date.now()}-${file.name}`;
    const filepath = path.join(process.cwd(), 'public/uploads', filename);
    
    await writeFile(filepath, buffer);
    uploadedFiles.push(`/uploads/${filename}`);
  }

  return NextResponse.json({ files: uploadedFiles });
}