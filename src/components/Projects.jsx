import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { GithubIcon } from "../utils/icons";

const validUrl = (url) => /^https?:\/\//.test(url || "");

function Projects({ darkMode }) {
  return <section id="projects" className={`relative py-24 md:py-32 ${darkMode ? "section-dark-alt" : "section-light-alt"}`}>
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-500">Selected work</p>
        <h2 className={`font-heading text-3xl font-bold md:text-4xl ${darkMode ? "text-white" : "text-slate-900"}`}>Featured Projects</h2>
        <p className={`mt-4 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>A focused selection of responsive, practical web applications and interfaces.</p>
      </motion.div>
      <div className="grid gap-7 lg:grid-cols-2">{projects.map((project, index) => <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.1 }} className={`flex h-full flex-col overflow-hidden rounded-2xl border ${darkMode ? "border-white/10 bg-slate-900/60" : "border-slate-200 bg-white shadow-sm"}`}>
        <img src={project.image} alt={project.imageAlt} className="aspect-[16/9] w-full border-b border-slate-200 object-cover dark:border-slate-700" />
        <div className="flex flex-1 flex-col p-6 sm:p-7"><p className="text-sm font-medium text-cyan-500">{project.subtitle}</p><h3 className={`mt-2 font-heading text-2xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{project.title}</h3><p className={`mt-4 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className={`rounded-md px-2.5 py-1 text-xs font-medium ${darkMode ? "bg-white/10 text-slate-200" : "bg-slate-100 text-slate-700"}`}>{tech}</span>)}</div>
          <div className="mt-auto flex flex-wrap gap-3 pt-7">{validUrl(project.live) && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`} className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">Live Demo <ExternalLink size={16} /></a>}{validUrl(project.github) && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} on GitHub`} className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${darkMode ? "border-white/15 text-white hover:bg-white/10" : "border-slate-300 text-slate-800 hover:bg-slate-50"}`}><GithubIcon size={16} /> GitHub</a>}</div>
        </div>
      </motion.article>)}</div>
    </div>
  </section>;
}
export default Projects;
