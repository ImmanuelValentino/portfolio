export type PortfolioProject = {
  slug: string;
  title: string;
  categoryId: string;
  categoryEn: string;
  year: string;
  style: "garden" | "ledger" | "journal";
  summaryId: string;
  summaryEn: string;
  briefId: string;
  briefEn: string;
  approachId: string;
  approachEn: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "ruang-tumbuh",
    title: "Ruang Tumbuh",
    categoryId: "Eksplorasi web · Konsep",
    categoryEn: "Web exploration · Concept",
    year: "2026",
    style: "garden",
    summaryId: "Konsep platform komunitas untuk menemukan ruang hijau di sekitar kota.",
    summaryEn: "A community platform concept for finding green spaces around the city.",
    briefId: "Bagaimana membuat informasi ruang publik terasa ramah dan mudah dijelajahi?",
    briefEn: "How might public-space information feel welcoming and easy to explore?",
    approachId: "Eksplorasi ini menyatukan peta, cerita tempat, dan informasi praktis dalam satu alur yang tenang.",
    approachEn: "This exploration brings maps, place stories, and practical details into one calm flow.",
  },
  {
    slug: "neraca",
    title: "Neraca",
    categoryId: "Dasbor produk · Konsep",
    categoryEn: "Product dashboard · Concept",
    year: "2026",
    style: "ledger",
    summaryId: "Eksplorasi dasbor finansial personal yang mengutamakan keterbacaan dan kendali.",
    summaryEn: "A personal finance dashboard exploration focused on clarity and control.",
    briefId: "Angka harian sering tersebar. Tantangannya adalah membantu orang memahami gambaran besarnya.",
    briefEn: "Everyday numbers are often scattered. The challenge is helping people see the bigger picture.",
    approachId: "Ringkasan, arus kas, dan aktivitas disusun berurutan dengan hierarki visual yang konsisten.",
    approachEn: "Overview, cash flow, and activity are organized with a consistent visual hierarchy.",
  },
  {
    slug: "catatan-senja",
    title: "Catatan Senja",
    categoryId: "Editorial digital · Konsep",
    categoryEn: "Digital editorial · Concept",
    year: "2026",
    style: "journal",
    summaryId: "Konsep ruang baca digital untuk tulisan pendek dan ide yang ingin disimpan.",
    summaryEn: "A digital reading space concept for short writing and ideas worth keeping.",
    briefId: "Membaca di layar tidak harus terasa bising atau penuh distraksi.",
    briefEn: "Reading on a screen does not have to feel noisy or distracting.",
    approachId: "Tipografi editorial, navigasi sederhana, dan ruang putih menjadi inti pengalaman membaca.",
    approachEn: "Editorial typography, simple navigation, and open space shape the reading experience.",
  },
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/uweng" },
  { label: "LinkedIn", href: "https://linkedin.com/in/uweng" },
  { label: "Email", href: "mailto:uweng@example.com" },
];