import { BriefcaseBusiness, MapPin } from "lucide-react";

function Experience({ darkMode }) {
  return (
    <section
      id="experience"
      className={`py-24 md:py-32 ${darkMode ? "section-dark-alt" : "section-light-alt"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            03 / Experience
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            Professional Experience
          </h2>
        </div>
        <article className="card-hover relative mx-auto w-full max-w-3xl rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6 md:p-8">
          <span className="absolute bottom-0 left-0 top-0 w-1 bg-[var(--color-primary)]" />
          <div className="flex flex-col justify-between gap-5 sm:flex-row">
            <div className="flex gap-4">
              <div className="h-fit shrink-0 rounded-lg bg-[var(--color-primary-soft)] p-3 text-[var(--color-primary)]">
                <BriefcaseBusiness size={23} />
              </div>
              <div className="min-w-0">
                <h3 className="break-words font-heading text-xl font-semibold text-[var(--color-text-primary)]">
                  Full Stack Developer Intern
                </h3>
                <p className="mt-1 font-mono text-sm font-medium text-[var(--color-accent)]">
                  NeuroFive Solutions
                </p>
                <p className="mt-2 font-mono text-xs text-[var(--color-text-muted)]">
                  July 2026 Cohort
                </p>
              </div>
            </div>
            <p className="inline-flex h-fit max-w-full items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              <MapPin size={16} className="text-[var(--color-primary)]" />{" "}
              Remote
            </p>
          </div>
          <p className="mt-6 leading-relaxed text-[var(--color-text-secondary)]">
            Completed a remote Full Stack Developer internship focused on
            building and improving full-stack web applications.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Experience;
