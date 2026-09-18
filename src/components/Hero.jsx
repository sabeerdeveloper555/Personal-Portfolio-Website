import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { PROFILE_IMAGE, SOCIAL_LINKS } from "../utils/constants";
import { GithubIcon, LinkedinIcon } from "../utils/icons";

function Hero({ darkMode }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center pt-20 ${darkMode ? "section-dark" : "section-light"}`}
    >
      <div
        className={`absolute inset-0 ${darkMode ? "bg-grid" : "bg-grid-light"} opacity-30`}
      />
      <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-[var(--color-primary)]/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="relative mx-auto flex w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid w-full items-center justify-items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="order-2 mx-auto max-w-4xl text-center"
          >
            <p className="mb-5 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary-soft)] px-3 py-2 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)] sm:px-4 sm:text-xs sm:tracking-[0.2em]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />{" "}
              &gt; Available for freelance opportunities
            </p>
            <h1 className="max-w-[14ch] break-words font-heading text-4xl font-bold leading-[0.98] text-[var(--color-text-primary)] sm:max-w-[12ch] sm:text-5xl lg:max-w-none lg:text-6xl xl:text-7xl">
              MERN Stack Developer building{" "}
              <span className="gradient-text">modern web applications.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              I build responsive, functional web applications using React,
              Node.js, Express, and MongoDB, with a focus on clean UI, reliable
              functionality, and practical user experiences.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3.5 font-medium text-white transition hover:bg-[var(--color-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)] sm:w-auto"
              >
                View Featured Work <ArrowDown size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3.5 font-medium text-[var(--color-text-primary)] transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-soft)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)] sm:w-auto"
              >
                <Mail size={18} /> Start a Project
              </button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-lg p-2.5 text-[var(--color-text-secondary)] transition hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
                >
                  {social.name === "github" && <GithubIcon size={20} />}
                  {social.name === "linkedin" && <LinkedinIcon size={20} />}
                  {social.name === "mail" && <Mail size={20} />}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="order-1 mx-auto w-full max-w-[18rem] sm:max-w-md"
          >
            <div className="aspect-square overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[0_20px_40px_rgba(220,20,60,0.08)]">
              <img
                src={PROFILE_IMAGE}
                alt="Sabeer Alam"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
