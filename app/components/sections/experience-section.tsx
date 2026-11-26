import type { PortfolioCopy } from "@/app/data/translations";

export default function ExperienceSection({ t }: { t: PortfolioCopy }) {
  return (
    <section className="section-shell journey-section" id="experience">
      <div className="section-label"><span>03</span><span>{t.experienceEyebrow}</span></div>
      <div className="journey-content">
        <div><h2>{t.experienceTitle}</h2><p>{t.experienceBody}</p></div>
        <article className="timeline-mockup">
          <div className="timeline-mockup-top"><span>01 / {t.experienceEyebrow}</span><span>{t.mockupLabel}</span></div>
          <div className="timeline-mockup-copy"><h3>{t.experienceRole}</h3><p>{t.experienceOrganization}</p><p>{t.mockupDetails}</p></div>
          <span className="timeline-date">20XX — 20XX</span>
        </article>
      </div>
    </section>
  );
}