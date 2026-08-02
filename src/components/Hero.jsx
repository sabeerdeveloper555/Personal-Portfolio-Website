import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { PROFILE_IMAGE, HERO_TITLES, SOCIAL_LINKS } from "../utils/constants";
import { GithubIcon, LinkedinIcon } from "../utils/icons";

function Hero({ darkMode }) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % HERO_TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center pt-20 ${
        darkMode ? "section-dark" : "section-light"
      }`}
    >
      {/* Background decorations */}
      <div className={`absolute inset-0 ${darkMode ? "bg-grid" : "bg-grid-light"} opacity-50`} />
      <div className="absolute top-20 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side — Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase mb-6 ${
                darkMode
                  ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                  : "bg-cyan-50 text-cyan-600 border border-cyan-200"
              }`}
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Available for opportunities
            </div>

            {/* Name */}
            <h1
              className={`font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Sabeer Alam</span>
            </h1>

            {/* Rotating Title */}
            <div
              className={`text-xl sm:text-2xl lg:text-3xl font-heading font-light mb-6 h-10 ${
                darkMode ? "text-slate-300" : "text-slate-500"
              }`}
            >
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {HERO_TITLES[titleIndex]}
              </motion.span>
            </div>

            {/* Description */}
            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Full Stack Developer with experience in building modern web and
              mobile applications and AI-powered solutions using React.js,
              Flutter, Flask, Python, and REST APIs. Skilled in developing
              scalable applications and solving real-world problems through
              clean and efficient code.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 btn-glow"
              >
                <Mail size={18} />
                Contact Me
              </button>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className={`inline-flex items-center gap-2 px-8 py-3.5 font-medium rounded-xl border transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-cyan-400/30"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-cyan-300 shadow-sm"
                }`}
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? "bg-white/5 text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/10 border border-white/5"
                      : "bg-slate-100 text-slate-500 hover:text-cyan-600 hover:bg-cyan-50 border border-slate-200"
                  }`}
                  aria-label={social.label}
                >
                  {social.name === "github" && <GithubIcon size={20} />}
                  {social.name === "linkedin" && <LinkedinIcon size={20} />}
                  {social.name === "mail" && <Mail size={20} />}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right side — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-cyan-400/20 spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-emerald-400/10 spin-slow-reverse" />

              {/* Profile image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden profile-glow border-2 border-cyan-400/30 float-animation">
                <img
                  src={PROFILE_IMAGE}
                  alt="Sabeer Alam"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
              </div>

              {/* Floating badge — React */}
              <div
                className={`absolute -right-2 top-8 px-3 py-2 rounded-xl text-xs font-medium shadow-lg ${
                  darkMode
                    ? "glass text-cyan-400"
                    : "bg-white text-cyan-600 shadow-slate-200"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  ⚛️ React.js
                </span>
              </div>

              {/* Floating badge — Node */}
              <div
                className={`absolute -left-2 bottom-12 px-3 py-2 rounded-xl text-xs font-medium shadow-lg ${
                  darkMode
                    ? "glass text-emerald-400"
                    : "bg-white text-emerald-600 shadow-slate-200"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  🟢 Node.js
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;