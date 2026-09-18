import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../utils/constants";
import { useActiveSection } from "../hooks/useActiveSection";

function Navbar({ darkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (id) => {
    setIsOpen(false);

    window.setTimeout(() => {
      const section = document.getElementById(id);

      if (!section) return;

      const navbarHeight = window.innerWidth >= 1024 ? 80 : 64;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(0, sectionTop - navbarHeight),
        behavior: "smooth",
      });
    }, 0);
  };

  const navStyle = scrolled
    ? {
        backgroundColor: darkMode
          ? "rgba(11, 11, 13, 0.96)"
          : "rgba(250, 250, 249, 0.96)",
        borderBottom: "1px solid var(--color-border)",
        boxShadow: "0 12px 28px rgba(220, 20, 60, 0.08)",
      }
    : {
        backgroundColor: "transparent",
        borderBottom: "none",
        boxShadow: "none",
      };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-300 backdrop-blur-xl"
      style={navStyle}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 w-full items-center justify-between gap-2 sm:gap-3 lg:h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("home");
            }}
            className="min-w-0 shrink-0 font-heading text-xl font-bold lg:text-2xl"
          >
            <span className="gradient-text">S</span>
            <span className="text-[var(--color-text-primary)]">abeer</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigation(link.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)] ${
                  activeSection === link.id
                    ? "bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-[var(--color-text-primary)] transition-all duration-200 hover:bg-[var(--color-surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-[var(--color-text-primary)] transition-all duration-200 hover:bg-[var(--color-surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)] lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="space-y-1 border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 pb-4 backdrop-blur-xl">
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavigation(link.id)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)] ${
                    activeSection === link.id
                      ? "bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
