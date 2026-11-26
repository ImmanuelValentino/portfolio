import Link from "next/link";
import type { PortfolioCopy } from "@/app/data/translations";

export default function SiteFooter({ t }: { t: PortfolioCopy }) {
  return (
    <footer className="site-footer">
      <Link className="wordmark" href="/">u<span>.</span></Link>
      <span>© Uweng 2026</span>
      <span>{t.footer}</span>
      <a href="#main">Back to top ↑</a>
    </footer>
  );
}