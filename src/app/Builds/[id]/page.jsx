import { generateProjectMetadata } from '@/lib/dynamicSEO';
import SingleProjectClient from "./SingleProjectClient";

export async function generateMetadata({ params }) {
  const { id } = await params;
  return await generateProjectMetadata(id);
}

export default function ProjectPage({ params }) {
  return (
    <SingleProjectClient param={params} />
  );
}