import { motion } from "framer-motion";
import { Code2, Database, Globe2 } from "lucide-react";

const focusAreas = [
  {
    icon: Code2,
    title: "Full-stack applications",
    text: "Building connected frontend and backend experiences for practical web products.",
  },
  {
    icon: Globe2,
    title: "Responsive frontend development",
    text: "Creating clear, adaptable interfaces with React.js and modern CSS tools.",
  },
  {
    icon: Database,
    title: "APIs and data",
    text: "Working with REST APIs, Node.js, Express.js, and MongoDB.",
  },
];

function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`relative py-24 md:py-32 ${darkMode ? "section-dark-alt" : "section-light-alt"}`}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              01 / About
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
              A developer focused on useful, well-crafted web experiences.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[var(--color-text-secondary)]">
              <p>
                I’m a MERN Stack Developer and BSCS Graduate focused on
                full-stack web applications, responsive frontend development,
                and practical client-oriented solutions.
              </p>
              <p>
                I work with React.js to build polished interfaces and use
                Node.js, Express.js, MongoDB, and REST APIs to support
                dependable application functionality.
              </p>
            </div>
          </motion.div>
          <div className="grid gap-4">
            {focusAreas.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card-hover flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5"
              >
                <div className="h-fit shrink-0 rounded-lg bg-[var(--color-primary-soft)] p-3 text-[var(--color-primary)]">
                  <Icon size={21} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-semibold text-[var(--color-text-primary)]">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
