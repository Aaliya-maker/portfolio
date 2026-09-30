import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleEscape = (event) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <nav className="site-container nav-inner" aria-label="Primary navigation">
        <Link to="/" className="brand" aria-label="Aaliya Khanam, home">
          <span>AK</span><i aria-hidden="true" />
        </Link>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => isActive ? "active" : undefined}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <a className="nav-resume" href="/Aaliya_Khanam_Resume.pdf" download>
          <Download aria-hidden="true" /> Resume
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div id="mobile-navigation" className={`mobile-nav ${isOpen ? "is-open" : ""}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) => isActive ? "active" : undefined}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <a href="/Aaliya_Khanam_Resume.pdf" download><Download aria-hidden="true" /> Download resume</a>
      </div>
    </header>
  );
};
