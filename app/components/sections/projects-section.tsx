"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/app/data/portfolio";
import type { Language, PortfolioCopy } from "@/app/data/translations";
import ProjectArtwork from "@/app/components/project-artwork";

export default function ProjectsSection({
  language,
  reducedMotion,
  t,
}: {
  language: Language;
  reducedMotion: boolean | null;
  t: PortfolioCopy;
}) {
  return (
    <section className="work-section" id="projects">
      <div className="section-shell">
        <div className="section-heading"><div className="section-label"><span>04</span><span>{t.workEyebrow}</span></div><p>{t.conceptNote}</p></div>
        <h2 className="work-heading">{t.workTitle}</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article className="project-row" key={project.slug} initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06 }}>
              <Link className="project-link" href={`/projects/${project.slug}`} aria-label={`${t.openCase}: ${project.title}`}>
                <ProjectArtwork style={project.style} />
                <div className="project-meta"><span className="project-number">0{index + 1}</span><div className="project-name"><h3>{project.title}</h3><span>{language === "id" ? project.categoryId : project.categoryEn}</span></div><span className="project-year">{project.year}</span><span className="project-arrow" aria-hidden="true">↗</span></div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}