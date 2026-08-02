import { motion } from "framer-motion";
import { Monitor, Server, Database, Wrench } from "lucide-react";
import { skillCategories } from "../data/skills";

const iconMap = {
  monitor: Monitor,
  server: Server,
  database: Database,
  wrench: Wrench,
};

const colorMap = {
  cyan: {
    darkBg: "bg-cyan-400/10",
    darkTx: "text-cyan-400",
    lightBg: "bg-cyan-50",
    lightTx: "text-cyan-600",
    bar: "from-cyan-500 to-cyan-400",
  },
  emerald: {
    darkBg: "bg-emerald-400/10",
    darkTx: "text-emerald-400",
    lightBg: "bg-emerald-50",
    lightTx: "text-emerald-600",
    bar: "from-emerald-500 to-emerald-400",
  },
  purple: {
    darkBg: "bg-purple-400/10",
    darkTx: "text-purple-400",
    lightBg: "bg-purple-50",
    lightTx: "text-purple-600",
    bar: "from-purple-500 to-purple-400",
  },
  orange: {
    darkBg: "bg-orange-400/10",
    darkTx: "text-orange-400",
    lightBg: "bg-orange-50",
    lightTx: "text-orange-600",
    bar: "from-orange-500 to-orange-400",
  },
};

function Skills({ darkMode }) {
  return (
    <section
      id="skills"
      className={`relative py-24 md:py-32 ${darkMode ? "section-dark" : "section-light"}`}
    >
      <div className={`absolute inset-0 ${darkMode ? "bg-grid" : "bg-grid-light"} opacity-30`} />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

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
            Skills
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            My <span className="gradient-text">Technical Skills</span>
          </h2>
          <p
            className={`mt-4 text-base max-w-2xl mx-auto ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
                className={`p-6 md:p-8 rounded-2xl card-hover ${
                  darkMode
                    ? "glass"
                    : "bg-white shadow-lg shadow-slate-200/50 border border-slate-100"
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2.5 rounded-xl ${
                      darkMode
                        ? `${colors.darkBg} ${colors.darkTx}`
                        : `${colors.lightBg} ${colors.lightTx}`
                    }`}
                  >
                    <IconComp size={20} />
                  </div>
                  <h3
                    className={`font-heading text-lg font-semibold ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span
                          className={`text-sm font-medium ${
                            darkMode ? "text-slate-200" : "text-slate-700"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span
                          className={`text-xs ${
                            darkMode ? "text-slate-400" : "text-slate-400"
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`h-2 rounded-full overflow-hidden ${
                          darkMode ? "bg-white/5" : "bg-slate-100"
                        }`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                          className={`h-full rounded-full bg-gradient-to-r ${colors.bar}`}
                        />
                      </div>
                    </div>
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