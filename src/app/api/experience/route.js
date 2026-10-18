import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import { isAuthorizedAdmin } from "@/lib/serverAuth";

function parseJSON(val, def) {
  try {
    return JSON.parse(val);
  } catch {
    return def;
  }
}

function formatExperience(e) {
  return { ...e, points: parseJSON(e.points, []) };
}

export async function GET() {
  try {
    const items = await prisma.experience.findMany({
      orderBy: [{ position: 'asc' }, { createdAt: 'desc' }],
    });
    return NextResponse.json(items.map(formatExperience));
  } catch (error) {
    console.error("[Experience API GET Error]:", error);
    return NextResponse.json({ error: 'Failed to fetch experience' }, { status: 500 });
  }
}

export async function POST(request) {
  if (!(await isAuthorizedAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const created = await prisma.experience.create({
      data: {
        title: body.title,
        company: body.company,
        period: body.period,
        current: body.current ?? true,
        points: JSON.stringify((body.points || []).filter(Boolean)),
        position: Number(body.position) || 0,
      },
    });
    return NextResponse.json(formatExperience(created), { status: 201 });
  } catch (error) {
    console.error("[Experience API POST Error]:", error);
    return NextResponse.json({ error: 'Failed to create experience' }, { status: 500 });
  }
}
