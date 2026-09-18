import { ArrowUp, Mail, MapPin, Send } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../utils/constants";
import { GithubIcon, LinkedinIcon } from "../utils/icons";

const quickLinks = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Services",
  "Contact",
];

function Footer({ darkMode }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className={`relative border-t border-[var(--color-border)] py-12 text-[var(--color-text-secondary)] ${
        darkMode
          ? "bg-[var(--color-bg-secondary)]"
          : "bg-[var(--color-bg-secondary)]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#home" className="font-heading text-2xl font-bold">
              <span className="gradient-text">S</span>
              <span className="text-[var(--color-text-primary)]">abeer</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-text-secondary)]">
              MERN Stack Developer and Full Stack Developer building modern,
              responsive, and functional web applications.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-2.5 text-[var(--color-text-secondary)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
                >
                  {social.name === "github" && <GithubIcon size={16} />}
                  {social.name === "linkedin" && <LinkedinIcon size={16} />}
                  {social.name === "mail" && <Mail size={16} />}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)]">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 font-mono text-xs text-[var(--color-text-secondary)]">
              {quickLinks.map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="transition hover:text-[var(--color-primary)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)]">
              Get in Touch
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[var(--color-text-secondary)]">
              {CONTACT_INFO.slice(0, 2).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 break-all transition hover:text-[var(--color-primary)]"
                >
                  {item.icon === "mail" ? (
                    <Mail size={16} />
                  ) : (
                    <Send size={16} />
                  )}
                  {item.value}
                </a>
              ))}
              <p className="flex gap-2 break-words">
                <MapPin
                  size={16}
                  className="shrink-0 text-[var(--color-accent)]"
                />
                Karachi, Pakistan
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-text-muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} Sabeer Alam. Built with React.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-mono transition hover:text-[var(--color-primary)]"
            aria-label="Scroll to top"
          >
            Back to top <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
