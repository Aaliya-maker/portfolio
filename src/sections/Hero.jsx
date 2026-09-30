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
      <div className="hero-copy">
        <div className="availability"><span aria-hidden="true" /> Open to senior frontend opportunities</div>
        <p className="hero-kicker">Senior Software Engineer · Gurgaon, India</p>
        <h1 id="hero-title">Aaliya Khanam builds <em>clear, scalable</em> digital products.</h1>
        <p className="hero-intro">Frontend engineer specializing in Angular and TypeScript, turning complex enterprise workflows into fast, dependable experiences people can use with confidence.</p>

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

      <div className="hero-portrait-wrap">
        <div className="portrait-label"><span>Currently</span> Senior Software Engineer</div>
        <img className="hero-portrait" src="/profile-photo.jpg" alt="Aaliya Khanam" width="720" height="900" fetchPriority="high" />
        <div className="portrait-accent" aria-hidden="true">AK</div>
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
