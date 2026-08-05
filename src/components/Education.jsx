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
      className={`relative py-24 md:py-32 ${
        darkMode ? "section-dark" : "section-light"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-grid" : "bg-grid-light"
        } opacity-30`}
      />
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-4 ${
              darkMode
                ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                : "bg-cyan-50 text-cyan-600 border border-cyan-200"
            }`}
          >
            Education
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            My <span className="gradient-text">Education</span>
          </h2>
          <p
            className={`mt-4 text-base max-w-2xl mx-auto ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Academic background and professional training
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl overflow-hidden card-hover ${
                darkMode
                  ? "glass"
                  : "bg-white shadow-lg shadow-slate-200/50 border border-slate-100"
              }`}
            >
              {/* Top accent line */}
              <div className="h-1 bg-gradient-to-r from-cyan-500 to-emerald-500" />

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left — Icon & Status */}
                  <div className="flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-3 flex-shrink-0">
                    <div
                      className={`p-4 rounded-2xl ${
                        darkMode
                          ? "bg-cyan-400/10 text-cyan-400"
                          : "bg-cyan-50 text-cyan-600"
                      }`}
                    >
                      {index === 0 ? (
                        <Award size={28} />
                      ) : (
                        <FileText size={28} />
                      )}
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                        edu.status === "Graduated"
                          ? darkMode
                            ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20"
                            : "bg-emerald-50 text-emerald-600 border border-emerald-200"
                          : darkMode
                            ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                            : "bg-cyan-50 text-cyan-600 border border-cyan-200"
                      }`}
                    >
                      {edu.status === "Graduated" ? (
                        <Award size={12} />
                      ) : (
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                      )}
                      {edu.status}
                    </span>
                  </div>

                  {/* Right — Details */}
                  <div className="flex-1">
                    <h3
                      className={`font-heading text-xl md:text-2xl font-semibold mb-2 ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {edu.institution}
                    </h3>

                    <p className="gradient-text font-heading font-semibold text-base md:text-lg mb-3">
                      {edu.degree}
                    </p>

                    {/* Duration & Location */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 text-sm ${
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        <Calendar size={15} className="text-cyan-400" />
                        {edu.duration}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 text-sm ${
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        <MapPin size={15} className="text-emerald-400" />
                        {edu.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed mb-5 ${
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <p
                        className={`text-xs font-medium uppercase tracking-wider mb-2.5 ${
                          darkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        Key Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((item) => (
                          <span
                            key={item}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${
                              darkMode
                                ? "bg-white/5 text-slate-200 border border-white/10"
                                : "bg-slate-50 text-slate-600 border border-slate-200"
                            }`}
                          >
                            <Award size={12} className="text-cyan-400" />
                            {item}
                          </span>
                        ))}
                      </div>
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
