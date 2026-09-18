import { motion } from "framer-motion";
import { Monitor, Server } from "lucide-react";
import { skillCategories } from "../data/skills";

const iconMap = {
  monitor: Monitor,
  server: Server,
};

const colorMap = {
  crimson: {
    bg: "bg-[var(--color-primary-soft)]",
    tx: "text-[var(--color-primary)]",
  },
  orange: {
    bg: "bg-[var(--color-accent-soft)]",
    tx: "text-[var(--color-accent)]",
  },
};

function Skills({ darkMode }) {
  return (
    <section
      id="skills"
      className={`relative py-24 md:py-32 ${darkMode ? "section-dark" : "section-light"}`}
    >
      <div
        className={`absolute inset-0 ${darkMode ? "bg-grid" : "bg-grid-light"} opacity-30`}
      />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[var(--color-primary)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            02 / SKILLS
          </p>
          <h2 className="font-heading text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            My <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-text-secondary)]">
            Core frontend, backend, and database technologies for MERN stack
            development.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => {
            const colors = colorMap[category.color];
            const IconComp = iconMap[category.icon];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="card-hover rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6 md:p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className={`rounded-xl p-2.5 ${colors.bg} ${colors.tx}`}>
                    <IconComp size={20} />
                  </div>
                  <h3 className="min-w-0 break-words font-heading text-lg font-semibold text-[var(--color-text-primary)]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="max-w-full break-words rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-2 font-mono text-xs font-medium text-[var(--color-text-secondary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
