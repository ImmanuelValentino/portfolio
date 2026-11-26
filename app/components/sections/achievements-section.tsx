"use client";

import { useState } from "react";
import type { Language, PortfolioCopy } from "@/app/data/translations";
import CertificateDialog from "@/app/components/certificate-dialog";

type Certificate = { titleId: string; titleEn: string; tone: string };

const certificates: Certificate[] = [
  { titleId: "HTML & CSS", titleEn: "HTML & CSS", tone: "mint" },
  { titleId: "JavaScript", titleEn: "JavaScript", tone: "yellow" },
  { titleId: "React", titleEn: "React", tone: "blue" },
  { titleId: "Next.js", titleEn: "Next.js", tone: "dark" },
  { titleId: "Python", titleEn: "Python", tone: "lavender" },
  { titleId: "Supabase", titleEn: "Supabase", tone: "green" },
];

export default function AchievementsSection({ language, t }: { language: Language; t: PortfolioCopy }) {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section className="achievement-section" id="achievements">
      <div className="section-shell">
        <div className="achievement-heading"><div className="section-label"><span>05</span><span>{t.achievementsEyebrow}</span></div><div><h2>{t.achievementsTitle}</h2><p>{t.achievementsBody}</p></div></div>
        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <button className="certificate-card" key={certificate.titleEn} type="button" onClick={() => setSelectedCertificate(certificate)} aria-label={`${t.viewCertificate}: ${language === "id" ? certificate.titleId : certificate.titleEn}`}>
              <span className={`certificate-art certificate-art--${certificate.tone}`}>
                <span className="certificate-art-top"><span>U.</span><span>{t.mockupLabel}</span></span>
                <span className="certificate-overline">CERTIFICATE OF COMPLETION</span>
                <span className="certificate-title">{language === "id" ? certificate.titleId : certificate.titleEn}</span>
                <span className="certificate-issuer">{t.certificateIssuer}</span>
                <span className="certificate-seal">U</span>
              </span>
              <span className="certificate-caption"><span>0{index + 1}</span>{language === "id" ? certificate.titleId : certificate.titleEn}<span aria-hidden="true">↗</span></span>
            </button>
          ))}
        </div>
      </div>
      {selectedCertificate && <CertificateDialog certificate={selectedCertificate} language={language} onClose={() => setSelectedCertificate(null)} t={t} />}
    </section>
  );
}