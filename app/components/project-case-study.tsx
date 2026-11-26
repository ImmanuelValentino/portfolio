import Link from "next/link";
import { motion } from "framer-motion";
import { projects, type PortfolioProject } from "@/app/data/portfolio";
import type { Language, PortfolioCopy } from "@/app/data/translations";
import ProjectArtwork from "@/app/components/project-artwork";

export default function ProjectCaseStudy({
  project,
  language,
  reducedMotion,
  t,
}: {
  project: PortfolioProject;
  language: Language;
  reducedMotion: boolean | null;
  t: PortfolioCopy;
}) {
  const nextIndex = (projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <div className="case-page" id="main">
      <section className="section-shell case-header">
        <Link href="/" className="back-link"><span aria-hidden="true">←</span>{t.backHome}</Link>
        <div className="case-title-grid"><span className="section-label"><span>CASE / {project.year}</span><span>{t.caseStudy}</span></span><div><p>{language === "id" ? project.categoryId : project.categoryEn}</p><h1>{project.title}<span>.</span></h1><p className="case-summary">{language === "id" ? project.summaryId : project.summaryEn}</p></div></div>
      </section>
      <motion.div className="case-art section-shell" initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}><ProjectArtwork style={project.style} /></motion.div>
      <section className="section-shell case-narrative">
        <div className="case-facts"><div><span>TYPE</span><strong>{project.categoryId}</strong></div><div><span>YEAR</span><strong>{project.year}</strong></div><div><span>STATUS</span><strong>{t.conceptNote}</strong></div></div>
        <div className="case-story"><article><span>01 / {t.theBrief}</span><p>{language === "id" ? project.briefId : project.briefEn}</p></article><article><span>02 / {t.theApproach}</span><p>{language === "id" ? project.approachId : project.approachEn}</p></article><p className="case-disclaimer">{t.conceptDisclaimer}</p></div>
      </section>
      <section className="next-case section-shell"><span>{t.nextProject}</span><Link href={`/projects/${nextProject.slug}`}><span>{nextProject.title}</span><span aria-hidden="true">↗</span></Link></section>
    </div>
  );
}