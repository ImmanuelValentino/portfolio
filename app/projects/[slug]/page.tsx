import { notFound } from "next/navigation";
import PortfolioSite from "@/app/components/portfolio-site";
import { projects } from "@/app/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!projects.some((project) => project.slug === slug)) notFound();
  return <PortfolioSite projectSlug={slug} />;
}