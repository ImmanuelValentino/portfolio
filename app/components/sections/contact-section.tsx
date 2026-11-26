import SiGmail from "@icons-pack/react-simple-icons/icons/SiGmail";
import SiInstagram from "@icons-pack/react-simple-icons/icons/SiInstagram";
import { socialLinks } from "@/app/data/portfolio";
import type { PortfolioCopy } from "@/app/data/translations";

export default function ContactSection({ t }: { t: PortfolioCopy }) {
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-inner">
        <div className="section-label"><span>06</span><span>{t.contactEyebrow}</span></div>
        <div className="contact-content">
          <h2>{t.contactTitle}</h2>
          <p>{t.contactBody}</p>
          <a className="contact-cta" href={socialLinks[2].href}>{t.sayHello}<span aria-hidden="true">↗</span></a>
          <div className="social-links">
            {socialLinks.map((item) => {
              const Icon = item.label === "Instagram" ? SiInstagram : item.label === "Email" ? SiGmail : null;
              return (
                <a href={item.href} key={item.label} aria-label={item.label} target={item.label === "Email" ? undefined : "_blank"} rel="noreferrer">
                  {Icon ? <Icon className="social-icon" color="default" size={18} title={item.label} /> : <span className="social-icon-linkedin" aria-hidden="true">in</span>}
                  <span className="social-name">{item.label}</span>
                  <span className="social-arrow" aria-hidden="true">↗</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}