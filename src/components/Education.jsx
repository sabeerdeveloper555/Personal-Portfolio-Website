import { motion } from "framer-motion";
import { Calendar, MapPin, Award, FileText, BookOpen } from "lucide-react";

const educationData = [
  {
    institution: "Karachi Institute of Economics and Technology (KIET)",
    degree: "Bachelor of Science in Computer Science (BSCS)",
    duration: "2022 — 2026",
    location: "Karachi, Pakistan",
    status: "Graduated",
    description:
      "Successfully completed a Bachelor of Science in Computer Science (BSCS), gaining a strong foundation in programming, data structures, algorithms, database systems, software engineering, operating systems, and web development. Strengthened analytical and problem-solving abilities through academic projects, collaborative assignments, and practical software development experience.",
    highlights: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Operating Systems",
      "Web Development",
    ],
  },
  {
    institution: "Saylani Mass IT Training (SMIT)",
    degree: "Modern Full Stack Web Development",
    duration: "2025 — Present",
    location: "Karachi, Pakistan",
    status: "Currently Pursuing",
    description:
      "Currently enrolled in an intensive professional training program focused on modern full stack web development using the MERN stack. Developing responsive web applications, REST APIs, and dynamic dashboards while following industry best practices, clean code principles, and version control workflows.",
    highlights: [
      "React.js & Node.js",
      "MongoDB & Express.js",
      "Tailwind CSS",
      "REST API Development",
      "Git & GitHub Workflow",
      "Responsive Design",
    ],
    icon: BookOpen,
  },
];

function Education({ darkMode }) {
  return (
    <section
      id="education"
      className={`relative py-24 md:py-32 ${darkMode ? "section-dark" : "section-light"}`}
    >
      <div
        className={`absolute inset-0 ${darkMode ? "bg-grid" : "bg-grid-light"} opacity-30`}
      />
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--color-accent)]/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block border border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
            06 / Education
          </span>
          <h2 className="font-heading text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-text-secondary)]">
            Academic background and professional training
          </p>
        </motion.div>
        <div className="mx-auto max-w-4xl space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-hover relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_18px_30px_rgba(220,20,60,0.04)]"
            >
              <div className="h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex min-w-0 shrink-0 flex-row flex-wrap items-start gap-4 sm:items-center md:flex-col md:items-center md:gap-3">
                    <div className="rounded-xl bg-[var(--color-primary-soft)] p-4 text-[var(--color-primary)]">
                      {index === 0 ? (
                        <Award size={28} />
                      ) : (
                        <FileText size={28} />
                      )}
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-medium ${edu.status === "Graduated" ? "border border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)] text-[var(--color-accent)]" : "border border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] text-[var(--color-primary)]"}`}
                    >
                      {edu.status === "Graduated" ? (
                        <Award size={12} />
                      ) : (
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
                      )}
                      {edu.status}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-2 break-words font-heading text-xl font-semibold text-[var(--color-text-primary)] md:text-2xl">
                      {edu.institution}
                    </h3>
                    <p className="mb-3 font-heading text-base font-semibold text-[var(--color-accent)] md:text-lg">
                      {edu.degree}
                    </p>
                    <div className="mb-4 flex flex-wrap items-center gap-4">
                      <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)]">
                        <Calendar
                          size={15}
                          className="text-[var(--color-primary)]"
                        />
                        {edu.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)]">
                        <MapPin
                          size={15}
                          className="text-[var(--color-accent)]"
                        />
                        {edu.location}
                      </span>
                    </div>
                    <p className="mb-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {edu.description}
                    </p>
                    <p className="mb-2.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                      Key Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1.5 font-mono text-xs font-medium text-[var(--color-text-secondary)]"
                        >
                          <Award
                            size={12}
                            className="text-[var(--color-primary)]"
                          />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
