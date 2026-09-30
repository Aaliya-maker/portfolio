import { Braces, Database, Gauge, Workflow } from "lucide-react";

const skillGroups = [
  {
    icon: Braces,
    title: "Frontend engineering",
    description: "Production interfaces built for scale, clarity, and long-term ownership.",
    skills: ["Angular", "React", "TypeScript", "JavaScript", "HTML", "CSS / SCSS"],
  },
  {
    icon: Workflow,
    title: "Architecture & state",
    description: "Predictable application structure and dependable data flows.",
    skills: ["RxJS", "NgRx", "REST APIs", "Lazy loading", "SSO", "Component systems"],
  },
  {
    icon: Gauge,
    title: "Quality & delivery",
    description: "Fast, accessible experiences backed by pragmatic engineering practices.",
    skills: ["Jest", "Accessibility", "Performance", "Responsive UI", "Git", "GitHub Copilot"],
  },
  {
    icon: Database,
    title: "UI ecosystems",
    description: "Consistent enterprise interfaces using proven libraries and design patterns.",
    skills: ["PrimeNG", "Angular Material", "Tailwind CSS", "Bootstrap", "Chart.js", "Design systems"],
  },
];

export const Skills = () => (
  <section id="skills" className="section-shell border-y border-border/70">
    <div className="site-container">
      <div className="section-heading">
        <span className="eyebrow">Technical toolkit</span>
        <h2>Depth where it matters. <span>Range where it helps.</span></h2>
        <p>A frontend-first toolkit shaped by enterprise products, complex workflows, and real delivery constraints.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-group">
            <group.icon aria-hidden="true" />
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul aria-label={`${group.title} skills`}>
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);
