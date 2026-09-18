import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { GithubIcon } from "../utils/icons";

const validUrl = (url) => /^https?:\/\//.test(url || "");

function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className={`relative py-24 md:py-32 ${darkMode ? "section-dark-alt" : "section-light-alt"}`}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            04 / Selected work
          </p>
          <h2 className="font-heading text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
            A focused selection of responsive, practical web applications and
            interfaces.
          </p>
        </motion.div>
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1 }}
              className="card-hover flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="aspect-[16/9] w-full border-b border-[var(--color-border)] object-cover"
              />
              <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
                <p className="font-mono text-sm font-medium text-[var(--color-accent)]">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 break-words font-heading text-2xl font-semibold text-[var(--color-text-primary)]">
                  {project.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="max-w-full break-words rounded-md border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-2.5 py-1 font-mono text-xs text-[var(--color-text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  {validUrl(project.live) && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)] sm:w-auto"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                  {validUrl(project.github) && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} on GitHub`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-primary)] transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-soft)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)] sm:w-auto"
                    >
                      <GithubIcon size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
