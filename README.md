# Sabeer Alam | Full Stack Developer

A premium, responsive portfolio website built to showcase my development work, technical strengths, and professional value as a Full Stack Developer. The project is structured to engage GitHub visitors, prospective clients, and recruiters with a clear, polished digital presence.

## Overview

This portfolio is more than a personal landing page—it is a professional showcase of how I approach product development, user experience, and modern web engineering. It combines visual polish with practical implementation to present my work in a way that feels credible, modern, and conversion-focused.

## Why This Project Matters

- For GitHub: it demonstrates a clean, maintainable frontend architecture and a product-oriented development approach.
- For clients: it reflects professionalism, design thinking, and technical execution.
- For recruiters: it communicates core competencies, project depth, and a strong ability to deliver modern web experiences.

## Featured Projects

### BizFlow — Business Management System
A full-stack business management system for managing customers, products and inventory, orders, staff accounts, and operational dashboard metrics with authentication and role-based access control.

Live Demo: https://bizflow-frontend-self.vercel.app
GitHub: https://github.com/sabeerdeveloper555/BizzFlow-Business-Management-System

Highlights:
- dashboard, customer, product/inventory, order, and staff management
- JWT authentication with bcrypt password hashing and protected routes
- admin/staff role-based access control (RBAC)
- server-side order totals, stock validation, and validated order status transitions
- built with React, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, and Mongoose
- deployed to production on Vercel

### FreelanceHub-PK
A full-stack freelance work management platform designed to manage clients, projects, budgets, deadlines, and operational status within a structured, secure workspace.

Highlights:
- role-based project environment
- client and project lifecycle management
- dashboard-driven workflow experience
- built for real-world freelance workflows
- strong focus on usability and practical value

### Lumina — SaaS Landing Page
A modern SaaS marketing landing page with responsive layout, motion-driven interactions, theme switching, and smooth navigation patterns.

Highlights:
- conversion-focused landing page design
- responsive and mobile-friendly layouts
- visual engagement through motion and styling
- clean product presentation for digital brands

## Core Competencies

- Full Stack Web Development
- Frontend Architecture and UI Implementation
- React + Modern JavaScript Development
- Responsive and Mobile-First Design
- Component-Based Development
- API Integration and Product Logic
- User Experience and Interface Design
- Professional Portfolio and Product Presentation

## Tech Stack

- React 19
- Vite
- JavaScript ES6+
- Tailwind CSS
- Framer Motion
- Lucide React
- EmailJS
- React Router DOM
- React Scroll
- React Hot Toast
- React Type Animation

## Project Structure

```bash
my-portfolio/
├── public/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── resume/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── index.js
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/
│   │   ├── useActiveSection.js
│   │   └── useTheme.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── utils/
│   │   ├── constants.js
│   │   └── icons.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── package-lock.json
```

## Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/sabeerdeveloper555/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Then open the local URL in your browser, typically:

```bash
http://localhost:5173
```

## Environment Variables

The contact form is connected with EmailJS. Add a `.env` file in the project root with the following values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Available Scripts

```bash
npm run dev
```
Starts the Vite development server.

```bash
npm run build
```
Creates the production build for deployment.

```bash
npm run preview
```
Serves the built project locally for preview.

```bash
npm run lint
```
Runs ESLint for code quality validation.

## Deployment

This portfolio is ready for deployment on modern hosting platforms such as:

- Vercel
- GitHub Pages

Production deployment flow:

```bash
npm run build
```

Then deploy the generated `dist` folder to your chosen hosting provider.

## Professional Summary

I build clean, user-centered digital experiences with a focus on reliability, usability, and modern product design. This portfolio reflects my ability to merge engineering discipline with visual excellence, making it suitable for both web projects and professional opportunities.

## Contact

- Email: sabeerdeveloper555@gmail.com
- GitHub: https://github.com/sabeerdeveloper555
- LinkedIn: https://linkedin.com/in/sabeer-alam

## License

This project is intended for personal portfolio and professional use. Please contact the owner before using it for commercial or redistributable purposes.
