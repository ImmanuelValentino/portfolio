"use client";

import Link from "next/link";
import type { Language, PortfolioCopy } from "@/app/data/translations";

type Theme = "light" | "dark";

export default function SiteHeader({
  language,
  theme,
  isProjectPage,
  t,
  onLanguageChange,
  onThemeToggle,
}: {
  language: Language;
  theme: Theme;
  isProjectPage: boolean;
  t: PortfolioCopy;
  onLanguageChange: (language: Language) => void;
  onThemeToggle: () => void;
}) {
  const sections = [
    { id: "home", label: t.navHome },
    { id: "education", label: t.navEducation },
    { id: "experience", label: t.navExperience },
    { id: "projects", label: t.navProjects },
    { id: "achievements", label: t.navAchievements },
    { id: "contact", label: t.navContact },
  ];

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Uweng, home">Nuel<span>.</span></Link>
      <nav className="main-nav" aria-label="Main navigation">
        {sections.map(({ id, label }) => (
          <Link href={isProjectPage ? `/#${id}` : `#${id}`} key={id}>{label}</Link>
        ))}
      </nav>
      <div className="header-controls">
        <div className="language-switch" aria-label="Language">
          <button type="button" onClick={() => onLanguageChange("id")} aria-pressed={language === "id"}>ID</button>
          <span>/</span>
          <button type="button" onClick={() => onLanguageChange("en")} aria-pressed={language === "en"}>EN</button>
        </div>
        <button className="theme-switch" type="button" onClick={onThemeToggle} aria-label={t.switchTheme} title={t.switchTheme}>
          <span className="theme-dot" />{theme === "light" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}