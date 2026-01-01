import { generateProjectMetadata } from '@/lib/dynamicSEO';
import SingleProjectClient from "./SingleProjectClient";

export async function generateMetadata({ params }) {
  return await generateProjectMetadata(params.id);
}

export default function ProjectPage({ params }) {
  return (
    <SingleProjectClient param={params} />
  );
}