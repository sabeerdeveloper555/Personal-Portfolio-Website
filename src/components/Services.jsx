import {
  Bug,
  Code2,
  LayoutTemplate,
  ServerCog,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Responsive Website Development",
    text: "Responsive websites designed to work smoothly across mobile, tablet, and desktop screens.",
  },
  {
    icon: Code2,
    title: "React.js Frontend Development",
    text: "Clean, component-based React interfaces with practical, user-focused layouts.",
  },
  {
    icon: Smartphone,
    title: "MERN Stack Web Applications",
    text: "Full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    icon: ServerCog,
    title: "REST API Development",
    text: "REST API development with Node.js, Express.js, and MongoDB.",
  },
  {
    icon: Bug,
    title: "Website Bug Fixes & Responsive Improvements",
    text: "Targeted fixes and responsive UI improvements for existing websites.",
  },
];

function Services({ darkMode }) {
  return (
    <section
      id="services"
      className={`py-24 md:py-32 ${darkMode ? "section-dark-alt" : "section-light-alt"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            05 / Services
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            How I can help
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
            Development services centered on modern web applications and
            responsive user experiences.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="card-hover rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6"
            >
              <div className="inline-flex rounded-lg bg-[var(--color-primary-soft)] p-3 text-[var(--color-primary)]">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-[var(--color-text-primary)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
