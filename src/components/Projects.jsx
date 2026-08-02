import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { GithubIcon } from "../utils/icons";

function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className={`relative py-24 md:py-32 ${darkMode ? "section-dark-alt" : "section-light-alt"}`}
    >
      <div className={`absolute inset-0 ${darkMode ? "bg-grid" : "bg-grid-light"} opacity-30`} />
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

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
            Projects
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            className={`mt-4 text-base max-w-2xl mx-auto ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group rounded-2xl overflow-hidden card-hover ${
                darkMode
                  ? "glass"
                  : "bg-white shadow-lg shadow-slate-200/50 border border-slate-100"
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/80 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p
                  className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                        darkMode
                          ? "bg-white/5 text-slate-200"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      darkMode
                        ? "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                    }`}
                  >
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;