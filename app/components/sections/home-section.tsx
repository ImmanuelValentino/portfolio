"use client";

import { motion } from "framer-motion";
import SiCss from "@icons-pack/react-simple-icons/icons/SiCss";
import SiGit from "@icons-pack/react-simple-icons/icons/SiGit";
import SiHtml5 from "@icons-pack/react-simple-icons/icons/SiHtml5";
import SiJavascript from "@icons-pack/react-simple-icons/icons/SiJavascript";
import SiNextdotjs from "@icons-pack/react-simple-icons/icons/SiNextdotjs";
import SiPython from "@icons-pack/react-simple-icons/icons/SiPython";
import SiReact from "@icons-pack/react-simple-icons/icons/SiReact";
import SiSupabase from "@icons-pack/react-simple-icons/icons/SiSupabase";
import SiTypescript from "@icons-pack/react-simple-icons/icons/SiTypescript";
import Image from "next/image";
import profilePhoto from "../../../Foto.jpeg";
import type { Language, PortfolioCopy } from "@/app/data/translations";

const stackItems = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Python", Icon: SiPython },
  { name: "Git", Icon: SiGit },
];

export default function HomeSection({
  language,
  reducedMotion,
  t,
}: {
  language: Language;
  reducedMotion: boolean | null;
  t: PortfolioCopy;
}) {
  return (
    <section className="home-section" id="home">
      <div className="hero section-shell">
        <div className="hero-kicker"><span className="status-dot" />{t.availability}<span className="hero-location">SOFTWARE & DIGITAL · INDONESIA · 2026</span></div>
        <div className="hero-grid">
          <div className="hero-index"><span>PORTFOLIO / 2026</span><span></span></div>
          <div className="hero-content">
            <motion.h1 initial={reducedMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              Building digital<br /><em>things that matter.</em>
            </motion.h1>
            <div className="hero-bottom">
              <p>{t.heroLead}</p>
              <a className="text-link" href="#projects">{t.explore}<span aria-hidden="true">↘</span></a>
            </div>
          </div>
          <figure className="hero-portrait">
            <div className="portrait-placeholder" role="img" aria-label={language === "id" ? "Frame foto profil Uweng" : "Uweng profile photo frame"}>
              <span><Image src={profilePhoto} alt={language === "id" ? "Foto profil Uweng" : "Uweng profile photo"} /></span><i aria-hidden="true">✳</i>
            </div>
          </figure>
        </div>
      </div>

      <div className="section-shell intro-section">
        <div className="section-label"><span>{t.aboutEyebrow}</span></div>
        <div className="intro-content">
          <h2>{t.aboutTitle}</h2>
          <div className="intro-details"><p>{t.aboutBody}</p><div><span>{t.focus}</span><strong>{t.focusValue}</strong></div></div>
        </div>
      </div>

      <div className="section-shell stack-section" id="stack">
        <div className="section-label"><span>{t.stackEyebrow}</span></div>
        <div className="stack-content">
          <div className="stack-heading"><h2>{t.stackTitle}</h2><p>{t.stackBody}</p></div>
          <div className="stack-grid">
            {stackItems.map(({ name, Icon }) => (
              <div className="stack-item" key={name}>
                <Icon className="stack-icon" color="default" size={32} title={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}