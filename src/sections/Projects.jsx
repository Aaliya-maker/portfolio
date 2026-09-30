import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "GemFin",
    type: "Investment management platform",
    summary: "A multi-role fintech platform for portfolio oversight, transactions, client management, and AUM reporting.",
    achievements: [
      "Built reusable data-heavy components for complex investment workflows",
      "Delivered responsive dashboards and consistent validation patterns",
      "Integrated REST APIs across client and transaction journeys",
    ],
    tags: ["Angular", "TypeScript", "PrimeNG", "RxJS", "NgRx", "SCSS"],
  },
  {
    number: "02",
    title: "Incident Operations",
    type: "Real-time monitoring platform",
    summary: "A ground-up incident platform designed for fast triage, secure access, and clear operational visibility.",
    achievements: [
      "Shaped modular architecture with lazy-loaded application areas",
      "Reduced unnecessary API traffic through improved state management",
      "Delivered responsive data visualization and secure SSO flows",
    ],
    tags: ["Angular", "TypeScript", "Angular Material", "Chart.js", "REST APIs"],
  },
  {
    number: "03",
    title: "Employee Payroll",
    type: "Compensation & declarations system",
    summary: "A responsive employee platform for compensation workflows and investment declarations.",
    achievements: [
      "Created reusable Angular components and Material UI patterns",
      "Improved search interactions with debouncing and RxJS",
      "Built accessible interfaces across desktop and mobile",
    ],
    tags: ["Angular", "TypeScript", "Angular Material", "RxJS", "REST APIs"],
  },
  {
    number: "04",
    title: "Personal Portfolio",
    type: "Personal brand experience",
    summary: "A fast, accessible portfolio focused on presenting engineering depth with clarity and personality.",
    achievements: [
      "Designed a responsive, component-led interface system",
      "Optimized content hierarchy for recruiter scanning",
      "Built accessible interactions and reduced-motion support",
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite"],
  },
];

export const Projects = () => (
  <section id="projects" className="section-shell">
    <div className="site-container">
      <div className="section-heading split-heading">
        <div>
          <span className="eyebrow">Selected work</span>
          <h2>Built for the <span>real world.</span></h2>
        </div>
        <p>Selected product work across fintech, operations, and internal platforms. Details are scoped around business outcomes and technical ownership.</p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.number} className="project-card">
            <div className="project-topline">
              <span className="project-number">{project.number}</span>
              <ArrowUpRight aria-hidden="true" />
            </div>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p className="project-summary">{project.summary}</p>
            <ul className="achievement-list">
              {project.achievements.map((achievement) => (
                <li key={achievement}><CheckCircle2 aria-hidden="true" />{achievement}</li>
              ))}
            </ul>
            <ul className="tag-list" aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);
