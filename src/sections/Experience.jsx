import { ArrowUpRight } from "lucide-react";

const milestones = [
  {
    period: "2026 — Present",
    role: "Senior Software Engineer",
    company: "Gemini Solutions",
    summary: "Own frontend delivery across enterprise and fintech products, with an emphasis on architecture, shared UI systems, and maintainable product execution.",
  },
  {
    period: "Apr 2025 — 2026",
    role: "Software Engineer L2",
    company: "Gemini Solutions",
    summary: "Expanded product ownership across data-intensive workflows, state management, API integration, performance, and responsive interfaces.",
  },
  {
    period: "Nov 2023 — Apr 2025",
    role: "Software Engineer L1",
    company: "Gemini Solutions",
    summary: "Delivered production Angular features and reusable components while building depth in TypeScript, RxJS, and enterprise UI patterns.",
  },
];

export const Experience = () => (
  <section id="experience" className="section-shell section-tinted">
    <div className="site-container experience-layout">
      <div className="section-heading experience-heading">
        <span className="eyebrow">Experience</span>
        <h2>Growth earned through <span>ownership.</span></h2>
        <p>Three roles, one continuous trajectory: increasing scope, stronger technical judgment, and deeper product responsibility.</p>
        <a href="/Aaliya_Khanam_Resume.pdf" download>Full career details <ArrowUpRight aria-hidden="true" /></a>
      </div>

      <ol className="timeline">
        {milestones.map((item, index) => (
          <li key={item.period} className={index === 0 ? "is-current" : ""}>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-content">
              <p className="timeline-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p>{item.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
