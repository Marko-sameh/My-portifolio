import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";
import path from "path";

// Seeds ONLY the Experience table, and only when it's empty. Never touches projects.
const prisma = new PrismaClient();

async function main() {
  if ((await prisma.experience.count()) > 0) {
    console.log("Experience table already has data - nothing changed.");
    return;
  }
  const data = JSON.parse(
    await fs.readFile(path.join(process.cwd(), "src/data/experience-db.json"), "utf8"),
  );
  for (const e of data) {
    await prisma.experience.create({
      data: {
        title: e.title,
        company: e.company,
        period: e.period,
        current: e.current ?? true,
        points: JSON.stringify(e.points || []),
        position: e.position ?? 0,
      },
    });
  }
  console.log(`Seeded ${data.length} experience entries.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
