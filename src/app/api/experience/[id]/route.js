import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthorizedAdmin } from "@/lib/serverAuth";

function parseJSON(val, def) {
  try {
    return JSON.parse(val);
  } catch {
    return def;
  }
}

const format = (e) => ({ ...e, points: parseJSON(e.points, []) });

export async function PUT(request, { params }) {
  if (!(await isAuthorizedAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  try {
    const body = await request.json();
    const data = {};
    if (body.title !== undefined) data.title = body.title;
    if (body.company !== undefined) data.company = body.company;
    if (body.period !== undefined) data.period = body.period;
    if (body.current !== undefined) data.current = body.current;
    if (body.points !== undefined)
      data.points = JSON.stringify(body.points.filter(Boolean));
    if (body.position !== undefined) data.position = Number(body.position) || 0;

    const updated = await prisma.experience.update({ where: { id }, data });
    return NextResponse.json(format(updated));
  } catch (error) {
    console.error("[Experience API PUT Error]:", error);
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Experience not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(
      { error: "Failed to update experience" },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  if (!(await isAuthorizedAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  try {
    await prisma.experience.delete({ where: { id } });
    return NextResponse.json({ message: "Experience deleted" });
  } catch (error) {
    console.error("[Experience API DELETE Error]:", error);
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Experience not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(
      { error: "Failed to delete experience" },
      { status: 500 },
    );
  }
}
