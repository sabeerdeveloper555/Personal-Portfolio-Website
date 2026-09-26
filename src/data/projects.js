import bizflowDashboardImage from "../assets/images/BizFlow-Dashboard.png";
import freelanceHubImage from "../assets/images/FreelanceHub-PK.png";
import luminaImage from "../assets/images/Lumina-SaaS-LandingPage.png";

export const projects = [
  {
    title: "BizFlow — Business Management System",
    subtitle: "Full Stack Web Application",
    description:
      "A full-stack business management system for managing customers, products and inventory, orders, staff accounts, and operational dashboard metrics with authentication and role-based access control.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
    ],
    image: bizflowDashboardImage,
    imageAlt: "BizFlow admin dashboard",
    github: "https://github.com/sabeerdeveloper555/BizFlow-Business-Management-System",
    live: "https://bizflow-frontend-self.vercel.app",
  },
  {
    title: "FreelanceHub-PK",
    subtitle: "Full-Stack Freelance Work Management Platform",
    description:
      "A full-stack freelance work-management platform for managing clients, projects, budgets, deadlines, and project status in a secure role-based workspace.",
    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Vercel",
    ],
    image: freelanceHubImage,
    imageAlt: "FreelanceHub-PK workspace dashboard",
    github:
      "https://github.com/sabeerdeveloper555/Capstone-Project-FreelanceHub",
    live: "https://capstone-project-freelance-hub-sk8u.vercel.app/",
  },
  {
    title: "Lumina — SaaS Landing Page",
    subtitle: "Responsive SaaS Landing Page",
    description:
      "A responsive SaaS landing page with a modern interface, theme toggle, mobile navigation, smooth scrolling, and scroll reveal animations.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Intersection Observer API",
      "Vercel",
    ],
    image: luminaImage,
    imageAlt: "Lumina SaaS landing page",
    github:
      "https://github.com/sabeerdeveloper555/Responsive-SaaS-Appication-LandingPage",
    live: "https://responsive-saa-s-appication-landing.vercel.app/",
  },
];
