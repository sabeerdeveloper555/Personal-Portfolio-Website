import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { PROFILE_IMAGE, SOCIAL_LINKS } from "../utils/constants";
import { GithubIcon, LinkedinIcon } from "../utils/icons";

function Hero({ darkMode }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className={`relative flex min-h-screen items-center pt-20 ${darkMode ? "section-dark" : "section-light"}`}>
      <div className={`absolute inset-0 ${darkMode ? "bg-grid" : "bg-grid-light"} opacity-30`} />
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-center lg:text-left">
          <p className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider ${darkMode ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300" : "border-cyan-200 bg-cyan-50 text-cyan-700"}`}><span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for freelance opportunities</p>
          <h1 className={`font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl ${darkMode ? "text-white" : "text-slate-900"}`}>MERN Stack Developer building <span className="gradient-text">modern web applications.</span></h1>
          <p className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg lg:mx-0 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>I build responsive, functional web applications using React, Node.js, Express, and MongoDB, with a focus on clean UI, reliable functionality, and practical user experiences.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"><button type="button" onClick={() => scrollTo("projects")} className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3.5 font-medium text-white transition hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">View Featured Work <ArrowDown size={18} /></button><button type="button" onClick={() => scrollTo("contact")} className={`inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${darkMode ? "border-white/15 text-white hover:bg-white/10" : "border-slate-300 text-slate-800 hover:bg-slate-50"}`}><Mail size={18} /> Start a Project</button></div>
          <div className="mt-8 flex justify-center gap-3 lg:justify-start">{SOCIAL_LINKS.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className={`rounded-lg p-2.5 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${darkMode ? "text-slate-300 hover:bg-white/10 hover:text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>{social.name === "github" && <GithubIcon size={20} />}{social.name === "linkedin" && <LinkedinIcon size={20} />}{social.name === "mail" && <Mail size={20} />}</a>)}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="mx-auto w-full max-w-sm"><div className={`rounded-3xl p-3 shadow-xl ${darkMode ? "border border-white/10 bg-slate-800/60" : "border border-slate-200 bg-white"}`}><img src={PROFILE_IMAGE} alt="Sabeer Alam" className="aspect-square w-full rounded-2xl object-cover" /></div></motion.div>
      </div></div>
    </section>
  );
}
export default Hero;
