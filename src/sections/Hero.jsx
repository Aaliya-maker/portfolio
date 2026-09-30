import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const stats = [
  { value: "3+", label: "Years building products" },
  { value: "4", label: "Production platforms" },
  { value: "2x", label: "Career promotions" },
];

export const Hero = () => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="site-container hero-layout">
      <div className="hero-heading">
        <div className="hero-topline">
          <p className="hero-kicker">Senior Software Engineer · Gurgaon, India</p>
          <div className="availability"><span aria-hidden="true" /> Open to senior frontend opportunities</div>
        </div>
        <h1 id="hero-title"><span className="hero-name">Aaliya Khanam.</span><span className="hero-statement">Engineering <em>clarity</em> into complexity.</span></h1>
      </div>

      <div className="hero-details">
        <p className="hero-intro">I build clear, dependable interfaces for complex products. My focus is Angular, TypeScript, and the details that make enterprise software feel effortless.</p>
        <div className="hero-connect">
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">Explore my work <ArrowRight aria-hidden="true" /></Link>
            <a className="button button-secondary" href="/Aaliya_Khanam_Resume.pdf" download><Download aria-hidden="true" /> Resume</a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <span>Find me online</span>
            <a href="https://github.com/Aaliya-maker" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/aaliya158/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn aria-hidden="true" /></a>
          </div>
        </div>
      </div>

      <dl className="hero-stats">
        {stats.map((stat) => (
          <div key={stat.label}><dt>{stat.value}</dt><dd>{stat.label}</dd></div>
        ))}
      </dl>
    </div>

    <Link className="scroll-cue" to="/about"><ArrowDown aria-hidden="true" /><span>Profile</span></Link>
  </section>
);
