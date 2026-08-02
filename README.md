# 🚀 Sabeer Alam — Developer Portfolio

A modern, premium, fully responsive single-page developer portfolio built with **React.js**, **Vite**, and **Tailwind CSS**. Features dark/light mode, smooth Framer Motion animations, glassmorphism design, and optimized for recruiters and freelance clients.

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-FF0055?style=flat-square&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 📸 Live Preview

> Coming Soon — Deployed on Vercel / Netlify

---

## 📌 About This Project

This is my personal developer portfolio website designed to showcase my skills, projects, and professional experience. The design follows a clean, minimal, and elegant aesthetic with a dark-first approach, glassmorphism cards, smooth animations, and professional spacing — all optimized for an outstanding first impression.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌙 Dark / Light Mode | Toggle between dark and light themes with localStorage persistence |
| 📊 Scroll Progress Indicator | Gradient progress bar at the top showing scroll position |
| 🧭 Active Navbar Links | Automatically highlights the current section in the navbar |
| 📱 Responsive Mobile Menu | Hamburger menu with smooth open/close animation |
| 🎬 Framer Motion Animations | Fade, slide-up, slide-left, slide-right, scale, and stagger effects |
| 🪟 Glassmorphism Cards | Frosted glass effect with backdrop blur and subtle borders |
| 🔄 Smooth Scrolling | Seamless navigation between sections |
| 📤 Scroll to Top | Gradient button in footer to scroll back to top |
| 🎨 Gradient Accents | Cyan-to-Emerald gradient used throughout for visual consistency |
| 🖼️ Hero Profile Image | Circular image with animated glowing border and floating badges |
| 📝 Contact Form | Functional form with toast notification on submit |
| ⚡ Fast Performance | Built with Vite for lightning-fast HMR and optimized builds |
| 🧩 Reusable Components | Modular component architecture for easy maintenance |
| 📐 Clean Typography | Poppins for headings, Inter for body text |
| 🔍 SEO Friendly | Semantic HTML, proper meta tags, and accessible UI |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React.js 19** | UI library — component-based architecture |
| **Vite 6** | Build tool — fast dev server and optimized bundling |
| **Tailwind CSS 4** | Utility-first CSS framework — rapid styling |
| **Framer Motion 11** | Animation library — smooth page transitions |
| **Lucide React** | Icon library — clean, consistent icons |
| **React Hooks** | State management, side effects, custom hooks |

---

## 📂 Project Structure
my-portfolio/
├── public/
│ └── vite.svg
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── index.js # Barrel export file
│ │ ├── Navbar.jsx # Sticky navigation bar
│ │ ├── Hero.jsx # Hero section with profile image
│ │ ├── About.jsx # About me with stats
│ │ ├── Skills.jsx # Skills with animated progress bars
│ │ ├── Projects.jsx # Project showcase cards
│ │ ├── Contact.jsx # Contact form with toast
│ │ ├── Footer.jsx # Footer with social links
│ │ ├── ScrollProgress.jsx # Scroll progress indicator
│ │ ├── ScrollToTop.jsx # Floating scroll-to-top button
│ │ └── ThemeToggle.jsx # Dark/light mode toggle button
│ ├── hooks/ # Custom React hooks
│ │ ├── useTheme.js # Theme state + localStorage persistence
│ │ └── useActiveSection.js # Intersection Observer for active nav
│ ├── pages/ # Page-level components
│ │ └── Home.jsx # Combines all sections
│ ├── data/ # Static data files
│ │ ├── projects.js # Project details
│ │ └── skills.js # Skills categories and levels
│ ├── utils/ # Utility files
│ │ ├── constants.js # App-wide constants (links, images, etc.)
│ │ └── icons.jsx # Custom SVG brand icons (GitHub, LinkedIn)
│ ├── assets/ # Images, fonts, and static assets
│ ├── index.css # Global styles, Tailwind, custom CSS
│ ├── main.jsx # React entry point
│ └── App.jsx # Root component — layout shell
├── index.html # HTML template with font links
├── vite.config.js # Vite + Tailwind plugin config
├── package.json # Dependencies and scripts
└── README.md # Project documentation


---

## ⚛️ React.js Concepts Used

This project demonstrates a wide range of React.js concepts and best practices:

### 1. 🧩 JSX (JavaScript XML)

JSX is a syntax extension that allows writing HTML-like code inside JavaScript. Every component in this project uses JSX to describe the UI.

```jsx
// Example from Hero.jsx
<h1 className="font-heading text-4xl font-bold text-white">
  Hi, I'm <span className="gradient-text">Sabeer Alam</span>
</h1>

2. 📦 Components
React applications are built using reusable components. This project uses functional components throughout — each section (Navbar, Hero, About, Skills, Projects, Contact, Footer) is a separate component.

// Example: Navbar is a standalone component
function Navbar({ darkMode, toggleTheme }) {
  return <nav>...</nav>;
}
export default Navbar;

Types of components in this project:

Page Components — Home.jsx (combines sections)
Section Components — Hero.jsx, About.jsx, Skills.jsx, etc.
Utility Components — ScrollProgress.jsx, ScrollToTop.jsx, ThemeToggle.jsx
Barrel Export — components/index.js (centralized exports)

3. 🪝 React Hooks
Hooks let you use state and lifecycle features in functional components.

useState — Local State Management
Manages component-level state like form data, theme toggle, and mobile menu.

// Example from Contact.jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

// Example from Navbar.jsx
const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect — Side Effects
Handles side effects like event listeners, timers, and localStorage updates.

// Example from useTheme.js — persist theme to localStorage
useEffect(() => {
  localStorage.setItem("theme", darkMode ? "dark" : "light");
}, [darkMode]);

// Example from Hero.jsx — rotating title timer
useEffect(() => {
  const interval = setInterval(() => {
    setTitleIndex((prev) => (prev + 1) % HERO_TITLES.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);


useRef — DOM References
Used in the useActiveSection hook to reference DOM elements for Intersection Observer.

const ref = useRef(null);

useCallback — Memoized Callbacks
Prevents unnecessary re-renders by memoizing function references.

4. 🔧 Custom Hooks
Custom hooks extract reusable logic into separate functions.

useTheme — Theme Management
// src/hooks/useTheme.js
export function useTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);
  return { darkMode, toggleTheme };
}
Concepts used: Lazy initialization of state, localStorage persistence, derived state.

useActiveSection — Active Navigation Tracking
// src/hooks/useActiveSection.js
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
Concepts used: Intersection Observer API, cleanup functions, dependency arrays.


5. 📤 Props (Properties)
Props allow data to flow from parent to child components. The darkMode and toggleTheme props are passed down through the component tree.
// App.jsx passes props to children
<Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
<Hero darkMode={darkMode} />
<About darkMode={darkMode} />

// Child component receives and uses props
function Hero({ darkMode }) {
  return (
    <section className={darkMode ? "section-dark" : "section-light"}>
      ...
    </section>
  );
}

6. 🔄 Conditional Rendering
Components render different UI based on conditions (dark/light mode, scroll state, mobile menu).
// Theme-based conditional classes
className={darkMode ? "text-white" : "text-slate-900"}

// Scroll-based conditional styling
className={scrolled ? "bg-slate-900/80 backdrop-blur-xl" : "bg-transparent"}

// State-based conditional rendering
{isOpen && <MobileMenu />}

7. 📋 List Rendering with .map()
Dynamic rendering of lists like navigation links, skills, projects, and social links.
// Example from Navbar.jsx
{NAV_LINKS.map((link) => (
  <button key={link.id} onClick={() => scrollToSection(link.id)}>
    {link.label}
  </button>
))}

// Example from Projects.jsx
{projects.map((project, index) => (
  <motion.div key={project.title} transition={{ delay: index * 0.15 }}>
    ...
  </motion.div>
))}

8. 🎬 Framer Motion Animations
Framer Motion provides declarative animations for React components.

initial + animate — Entry Animations
// Fade in from left
<motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>

whileInView — Scroll-Triggered Animations
// Animate when element enters viewport
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>

whileHover / whileTap — Interaction Animations
// Scale on hover/tap
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>

AnimatePresence — Exit Animations
// Animate element on mount and unmount
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    />
  )}
</AnimatePresence>

Staggered Animations
// Delay each item in a list
{stats.map((stat, index) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  />
))}

9. 📡 Event Handling
React synthetic events for user interactions.
// Form submission
const handleSubmit = (e) => {
  e.preventDefault();
  setShowToast(true);
  setFormData({ name: "", email: "", message: "" });
};

// Controlled inputs
<input
  value={formData.name}
  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
/>

// Smooth scroll navigation
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// Window scroll event
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

10. 🗂️ Controlled Components
The contact form uses controlled components — React state controls the input values.
const [formData, setFormData] = useState({ name: "", email: "", message: "" });

<input
  type="text"
  value={formData.name}
  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
/>

11. 📐 Component Composition
Components are composed together to build complex UIs from simple pieces.
// Home.jsx composes multiple section components
function Home({ darkMode }) {
  return (
    <>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </>
  );
}

// App.jsx composes layout + page
function App() {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

12. 📦 Barrel Exports
A centralized export file that simplifies imports across the project.
// src/components/index.js
export { default as Navbar } from "./Navbar";
export { default as Hero } from "./Hero";
export { default as About } from "./About";
// ... more exports

// Then import from one place
import { Navbar, Hero, About } from "./components";

13. 🧹 Cleanup Functions
Event listeners and observers are properly cleaned up to prevent memory leaks.
useEffect(() => {
  const observer = new IntersectionObserver(...);
  return () => observer.disconnect();  // Cleanup on unmount
}, []);

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);  // Cleanup
}, []);

14. 🔗 Lazy State Initialization
Using a function inside useState to compute initial state only once.
// useTheme.js — reads localStorage only on first render
const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem("theme");
  return saved ? saved === "dark" : true;
});

15. 🌐 Browser APIs Integration
| API | Usage |
|-----|-------|
| `IntersectionObserver` | Active section tracking, scroll-triggered animations |
| `localStorage` | Theme persistence across sessions |
| `window.scrollTo()` | Smooth scroll to top |
| `window.scrollY` | Scroll position detection for navbar and progress bar |

🎨 Design System
Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Dark Background | `#0F172A` | Primary dark background |
| Dark Alt Background | `#0d1526` | Alternating section background |
| Cyan Accent | `#06B6D4` | Primary accent, buttons, highlights |
| Emerald Accent | `#10B981` | Secondary accent, gradient end |
| White Text | `#FFFFFF` | Primary text on dark |
| Light Slate | `#E2E8F0` | Secondary text on dark |
| Slate | `#94A3B8` | Muted text on dark |

Typography
| Usage | Font | Weight |
|-------|------|--------|
| Headings | Poppins | 500, 600, 700 |
| Body | Inter | 400, 500 |
| Labels | Inter | 500 |

Key Design Elements
Glassmorphism — backdrop-blur(16px) + semi-transparent backgrounds
Gradient Accents — linear-gradient(135deg, #06B6D4, #10B981)
Rounded Corners — border-radius: 12px to 16px
Soft Shadows — Subtle box-shadow on hover states
Glow Effects — Animated box-shadow on profile image and buttons

🚀 Getting Started
Prerequisites
Node.js >= 18.x
npm >= 9.x


Installation
# Clone the repository
git clone https://github.com/sabeerdeveloper555/my-portfolio.git

# Navigate to the project directory
cd my-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev


Build for Production
# Create optimized production build
npm run build

# Preview the production build
npm run preview

📁 Key Files Explained
| File | Purpose |
|------|---------|
| `vite.config.js` | Vite configuration with React and Tailwind plugins |
| `src/main.jsx` | React DOM entry point — renders the App |
| `src/App.jsx` | Root component — layout shell with Navbar, Home, Footer |
| `src/index.css` | Global styles, Tailwind imports, custom animations |
| `src/utils/constants.js` | Centralized constants — links, images, titles |
| `src/utils/icons.jsx` | Custom SVG brand icons (GitHub, LinkedIn) |
| `src/data/skills.js` | Skills data — categories, names, levels |
| `src/data/projects.js` | Projects data — titles, descriptions, tech, links |
| `src/hooks/useTheme.js` | Custom hook — dark/light mode with localStorage |
| `src/hooks/useActiveSection.js` | Custom hook — active nav link tracking |
| `src/pages/Home.jsx` | Page component — combines all sections |

📱 Responsive Breakpoints
| Breakpoint | Width | Target |
|-----------|-------|--------|
| `sm` | 640px | Small phones landscape |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |

🔮 Future Improvements
 Add blog section with markdown support
 Add project detail pages with React Router
 Integrate EmailJS for real contact form submission
 Add testimonials section
 Add experience/education timeline
 Add loading screen animation
 Deploy to Vercel with custom domain
 Add Open Graph meta tags for social sharing
 Implement page transition animations
 Add dark mode transition animation

👨‍💻 Author
Sabeer Alam

📧 Email: alamsabeer05@gmail.com
🐙 GitHub: sabeerdeveloper555
💼 LinkedIn: sabeer-alam
📱 Phone: +92 332 7782097
📍 Location: Karachi, Pakistan

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### ⭐ If you found this portfolio helpful, please give it a star!

**Built with ❤️ by Sabeer Alam**

</div>

