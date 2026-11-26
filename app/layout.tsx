import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uweng — Digital Portfolio",
  description:
    "Portfolio Uweng: eksplorasi web, desain produk digital, dan pengalaman yang dibangun dengan rasa ingin tahu.",
  keywords: ["Uweng", "portfolio", "web development", "digital product", "Indonesia"],
  openGraph: {
    title: "Uweng — Digital Portfolio",
    description: "Turning ideas into clear and useful digital experiences.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
