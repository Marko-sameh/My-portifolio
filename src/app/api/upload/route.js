import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { isAuthorizedAdmin } from "@/lib/serverAuth";
import { existsSync } from 'fs';

const ALLOWED_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif']);
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit

export async function POST(request) {
  if (!(await isAuthorizedAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
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
      if (typeof file === 'string') continue;
      
      const ext = path.extname(file.name || '').toLowerCase();
      if (!ALLOWED_EXTENSIONS.has(ext)) {
        return NextResponse.json(
          { error: `File type ${ext} is not allowed. Only images (${Array.from(ALLOWED_EXTENSIONS).join(', ')}) are permitted.` },
          { status: 400 }
        );
      }

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `File ${file.name} exceeds the maximum allowed size of 5MB.` },
          { status: 400 }
        );
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Sanitize filename to prevent directory traversal
      const safeBasename = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
      const filename = `${Date.now()}-${safeBasename}${ext}`;
      const filepath = path.join(uploadDir, filename);
      
      await writeFile(filepath, buffer);
      uploadedFiles.push(`/api/uploads/${filename}`);
    }

    return NextResponse.json({ files: uploadedFiles });
  } catch (error) {
    console.error('File upload error:', error);
    return NextResponse.json({ error: 'File upload failed' }, { status: 500 });
  }
}