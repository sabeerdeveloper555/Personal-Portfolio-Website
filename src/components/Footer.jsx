import { Mail, ArrowUp, MapPin, Send } from "lucide-react";
import { SOCIAL_LINKS } from "../utils/constants";
import { GithubIcon, LinkedinIcon } from "../utils/icons";

function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className={`relative py-12 transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 border-t border-white/5 text-slate-300"
          : "bg-slate-50 border-t border-slate-200 text-slate-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          {/* Brand + blurb */}
          <div className="md:col-span-2">
            <a href="#home" className="font-heading font-bold text-2xl">
              <span className="gradient-text">S</span>
              <span className={darkMode ? "text-white" : "text-slate-900"}>
                abeer
              </span>
            </a>
            <p
              className={`mt-4 max-w-sm text-sm leading-relaxed ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Full Stack Developer specializing in the MERN stack. I build
              fast, accessible, and polished web applications — from concept
              to deployment.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? "bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 border border-white/5"
                      : "bg-white text-slate-500 hover:text-cyan-500 hover:bg-cyan-50 border border-slate-200 shadow-sm"
                  }`}
                >
                  {social.name === "github" && <GithubIcon size={16} />}
                  {social.name === "linkedin" && <LinkedinIcon size={16} />}
                  {social.name === "mail" && <Mail size={16} />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`font-heading font-semibold text-sm uppercase tracking-wider mb-4 ${
                darkMode ? "text-slate-200" : "text-slate-900"
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-200 ${
                      darkMode
                        ? "text-slate-400 hover:text-cyan-400"
                        : "text-slate-500 hover:text-cyan-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className={`font-heading font-semibold text-sm uppercase tracking-wider mb-4 ${
                darkMode ? "text-slate-200" : "text-slate-900"
              }`}
            >
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-cyan-500"
                />
                <span className={darkMode ? "text-slate-400" : "text-slate-500"}>
                  Karachi, Pakistan
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-cyan-500" />
                <a
                  href="mailto:alamsabeer05@gmail.com"
                  className={`transition-colors duration-200 ${
                    darkMode
                      ? "text-slate-400 hover:text-cyan-400"
                      : "text-slate-500 hover:text-cyan-600"
                  }`}
                >
                  alamsabeer05@gmail.com
                </a>
              </li>
            </ul>

            <a
              href="#contact"
              className={`inline-flex items-center gap-2 mt-5 text-sm font-medium transition-all duration-300 ${
                darkMode
                  ? "text-cyan-400 hover:text-cyan-300"
                  : "text-cyan-600 hover:text-cyan-700"
              }`}
            >
              Let's work together <Send size={14} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px w-full ${
            darkMode ? "bg-white/5" : "bg-slate-200"
          }`}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p
            className={`text-sm text-center md:text-left ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            © {new Date().getFullYear()} Sabeer Alam. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;