import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  const data = await fs.readFile(path.join(process.cwd(), 'src/data/projects-db.json'), 'utf8');
  const projects = JSON.parse(data);

  console.log('Clearing old projects...');
  await prisma.project.deleteMany({});
  console.log('Inserting new projects...');

  for (const p of projects) {
    await prisma.project.create({
      data: {
        id: String(p.id),
        title: p.title,
        desc: p.desc,
        fullDescription: p.fullDescription || null,
        features: JSON.stringify(p.features || []),
        challenges: JSON.stringify(p.challenges || []),
        results: p.results || null,
        img: p.img || null,
        images: JSON.stringify(p.images || []),
        tag: p.tag || null,
        tech: JSON.stringify(p.tech || []),
        links: JSON.stringify(p.links || []),
        showOnHome: p.showOnHome || false,
        createdAt: p.createdAt ? new Date(p.createdAt) : new Date(),
        updatedAt: p.updatedAt ? new Date(p.updatedAt) : (p.createdAt ? new Date(p.createdAt) : new Date())
      }
    });
  }
  console.log('Database seeded successfully');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
