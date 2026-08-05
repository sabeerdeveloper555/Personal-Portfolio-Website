# ?? Sabeer Alam — Developer Portfolio

A modern, responsive single-page developer portfolio built with **React.js**, **Vite**, and **Tailwind CSS**. The project features dark/light mode, smooth animations, a downloadable resume button, and a polished one-page layout.

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0055?style=flat-square&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ?? About

This portfolio website showcases skills, projects, education, and contact details in a polished, mobile-friendly layout. It is designed for personal branding and recruiter/client presentation.

---

## ? Features

- Dark / Light mode with persistence
- Smooth scroll navigation between sections
- Active navbar highlighting based on current section
- Responsive mobile menu with animation
- Downloadable resume button in the Hero section
- Framer Motion section animations
- Glassmorphism-inspired cards and accents
- Scroll progress indicator at the top
- Clean responsive layout for desktop and mobile

---

## ??? Tech Stack

- React.js 19
- Vite 8
- Tailwind CSS 4
- Framer Motion 12
- Lucide React icons
- React Hooks

---

## ?? Project Structure

```text
my-portfolio/
+-- public/
+-- src/
¦   +-- assets/                  # Images, resume PDF, and static assets
¦   +-- components/              # Reusable UI components
¦   ¦   +-- Education.jsx
¦   ¦   +-- Footer.jsx
¦   ¦   +-- Hero.jsx
¦   ¦   +-- Navbar.jsx
¦   ¦   +-- Projects.jsx
¦   ¦   +-- ScrollProgress.jsx
¦   ¦   +-- ScrollToTop.jsx
¦   ¦   +-- Skills.jsx
¦   ¦   +-- ThemeToggle.jsx
¦   ¦   +-- Contact.jsx
¦   ¦   +-- index.js
¦   +-- data/                    # Static project and skill data
¦   +-- hooks/                   # Custom React hooks
¦   ¦   +-- useTheme.js
¦   ¦   +-- useActiveSection.js
¦   +-- pages/                   # Page-level components
¦   ¦   +-- Home.jsx
¦   +-- utils/                   # Constants and custom icons
¦   +-- App.jsx                  # Root app component
¦   +-- index.css                # Global styles and Tailwind settings
¦   +-- main.jsx                 # React entry point
+-- index.html
+-- package.json
+-- vite.config.js
+-- README.md
```

---

## ?? Getting Started

### Prerequisites

- Node.js v20 or later
- npm v10 or later

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal to view the site.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## ?? Notes

- `App.jsx` renders `Home.jsx`, which includes the `Education` section.
- `Hero.jsx` includes a working resume download link.
- `Navbar.jsx` supports smooth scrolling and active link highlighting.

---

## ?? License

This project is licensed under the MIT License.
