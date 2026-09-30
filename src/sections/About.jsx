import { Blocks, Gauge, Users } from "lucide-react";

const principles = [
  { icon: Blocks, title: "Systems over screens", text: "Reusable components and patterns that keep products consistent as they grow." },
  { icon: Gauge, title: "Performance by default", text: "Thoughtful state, data flow, and rendering decisions from the first implementation." },
  { icon: Users, title: "Clarity for teams", text: "Maintainable code and direct communication that make collaboration easier." },
];

export const About = () => (
  <section id="about" className="section-shell">
    <div className="site-container about-layout">
      <div className="section-heading about-heading">
        <span className="eyebrow">Engineering profile</span>
        <h2>I make complexity feel <span>considered.</span></h2>
      </div>

      <div className="about-copy">
        <p className="about-lead">I’m a frontend engineer who enjoys the part between a complicated requirement and a product that feels obvious to use.</p>
        <p>Over the last three years, I’ve shipped enterprise and fintech experiences spanning dashboards, transaction workflows, complex forms, API integrations, and shared component systems. Angular is my deepest expertise; React is an active part of my toolkit.</p>
        <p>I care about the details users notice and the engineering decisions teams inherit: accessibility, predictable state, responsive behavior, performance, and code that remains understandable after launch.</p>
      </div>

      <div className="principles" aria-label="Engineering principles">
        {principles.map((principle) => (
          <article key={principle.title}>
            <principle.icon aria-hidden="true" />
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
