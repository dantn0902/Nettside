import SocialLinkData from "../data/socials.json";
import "../styles/socials.css";

type SocialLink = {
  href: string;
  label: string;
  iconClass: string;
  title?: string;
  id?: string;
  targetBlank?: boolean;
};

const socialLinks: SocialLink[] = SocialLinkData;

export default function Socials() {
  return (
    <main className="socials-page">
      <h1>Socials</h1>
      <p>Find me around the internet.</p>

      <div className="socials-grid">
        {socialLinks.map((social) => (
          <a
            key={social.href}
            className="social-card"
            href={social.href}
            title={social.title}
            target={social.targetBlank ? "_blank" : undefined}
            rel={social.targetBlank ? "noreferrer" : undefined}
          >
            <i className={social.iconClass} aria-hidden="true" />
            <span>{social.label}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
