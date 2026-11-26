"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";
import AchievementsSection from "@/app/components/sections/achievements-section";
import ContactSection from "@/app/components/sections/contact-section";
import EducationSection from "@/app/components/sections/education-section";
import ExperienceSection from "@/app/components/sections/experience-section";
import HomeSection from "@/app/components/sections/home-section";
import ProjectsSection from "@/app/components/sections/projects-section";
import ProjectCaseStudy from "@/app/components/project-case-study";
import SiteFooter from "@/app/components/site-footer";
import SiteHeader from "@/app/components/site-header";
import { projects } from "@/app/data/portfolio";
import { copy, type Language } from "@/app/data/translations";

type Theme = "light" | "dark";

function subscribeToPreferences(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-preference-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio-preference-change", callback);
  };
}

function getLanguagePreference(): Language {
  return window.localStorage.getItem("portfolio-language") === "en" ? "en" : "id";
}

function getThemePreference(): Theme {
  return window.localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light";
}

function savePreference(key: string, value: string) {
  window.localStorage.setItem(key, value);
  window.dispatchEvent(new Event("portfolio-preference-change"));
}

export default function PortfolioSite({ projectSlug }: { projectSlug?: string }) {
  const language = useSyncExternalStore<Language>(subscribeToPreferences, getLanguagePreference, () => "id");
  const theme = useSyncExternalStore<Theme>(subscribeToPreferences, getThemePreference, () => "light");
  const reducedMotion = useReducedMotion();
  const project = projects.find((item) => item.slug === projectSlug);
  const t = copy[language];

  return (
    <main className="portfolio" data-theme={theme}>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader
        language={language}
        theme={theme}
        isProjectPage={Boolean(project)}
        t={t}
        onLanguageChange={(nextLanguage) => savePreference("portfolio-language", nextLanguage)}
        onThemeToggle={() => savePreference("portfolio-theme", theme === "light" ? "dark" : "light")}
      />
      {project ? (
        <ProjectCaseStudy project={project} language={language} reducedMotion={reducedMotion} t={t} />
      ) : (
        <div id="main">
          <HomeSection language={language} reducedMotion={reducedMotion} t={t} />
          <EducationSection t={t} />
          <ExperienceSection t={t} />
          <ProjectsSection language={language} reducedMotion={reducedMotion} t={t} />
          <AchievementsSection language={language} t={t} />
          <ContactSection t={t} />
        </div>
      )}
      <SiteFooter t={t} />
    </main>
  );
}