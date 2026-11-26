import type { PortfolioCopy } from "@/app/data/translations";

export default function EducationSection({ t }: { t: PortfolioCopy }) {
  return (
    <section className="section-shell journey-section education-section" id="education">
      <div className="section-label"><span>02</span><span>{t.educationEyebrow}</span></div>
      <div className="journey-content">
        <div><h2>{t.educationTitle}</h2><p>{t.educationBody}</p></div>
        <article className="timeline-mockup">
          <div className="timeline-mockup-top"><span>01 / {t.educationEyebrow}</span><span>{t.mockupLabel}</span></div>
          <div className="timeline-mockup-copy"><h3>{t.educationProgram}</h3><p>{t.educationInstitution}</p></div>
          <span className="timeline-date">20XX — 20XX</span>
        </article>
      </div>
    </section>
  );
}