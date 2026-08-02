import { motion } from "framer-motion";
import { FolderOpen, Layers, GitCommit, Puzzle } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "10+", icon: FolderOpen },
  { label: "Technologies", value: "15+", icon: Layers },
  { label: "Code Commits", value: "500+", icon: GitCommit },
  { label: "Problems Solved", value: "100+", icon: Puzzle },
];

const tags = ["Problem Solver", "Team Player", "Quick Learner", "Clean Code"];

function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`relative py-24 md:py-32 ${darkMode ? "section-dark-alt" : "section-light-alt"}`}
    >
      <div className={`absolute inset-0 ${darkMode ? "bg-grid" : "bg-grid-light"} opacity-30`} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

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
            About Me
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Get To Know <span className="gradient-text">Me Better</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3
              className={`font-heading text-2xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              A Passionate Full Stack Developer
            </h3>

            <div
              className={`space-y-4 text-base leading-relaxed ${
                darkMode ? "text-slate-200" : "text-slate-600"
              }`}
            >
              <p>
                I'm a passionate Full Stack Developer who enjoys building
                modern web applications that make a real difference. With a
                strong foundation in the MERN stack and experience in
                AI-powered solutions, I love turning complex problems into
                elegant, user-friendly solutions.
              </p>
              <p>
                I'm constantly learning new technologies and improving my
                development skills. Whether it's building scalable backend
                systems with Node.js and Express, crafting responsive
                interfaces with React.js, or integrating AI capabilities with
                Flask and OpenAI APIs — I thrive on solving real-world
                problems through clean and efficient code.
              </p>
              <p>
                Currently pursuing my BS in Computer Science at Karachi
                Institute of Economics &amp; Technology, I combine academic
                knowledge with hands-on project experience to deliver
                high-quality, user-centric software in collaborative
                development environments.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    darkMode
                      ? "bg-white/5 text-slate-200 border border-white/10"
                      : "bg-white text-slate-600 border border-slate-200 shadow-sm"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl text-center card-hover ${
                    darkMode
                      ? "glass"
                      : "bg-white shadow-lg shadow-slate-200/50 border border-slate-100"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      darkMode
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "bg-cyan-50 text-cyan-600"
                    }`}
                  >
                    <IconComp size={24} />
                  </div>
                  <div
                    className={`font-heading text-3xl font-bold mb-1 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;