import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import React, { useState,useEffect } from "react";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled ? "glass-strong" : "bg-transparent"} py-5 z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-bold tracking-tight hover:text-primary"
        >
          AK<span className="text-primary">.</span>
        </a>
        {/*Desktop Navigation*/}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/*CTA Button*/}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>
        {/*Mobile Menu Button*/}
        <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {/* Menu component is a component from lucide-react which renders a menu icon having parameters such as size and color */}
          
          {isMobileMenuOpen ? (
            <X
              size={24}
            />
          ) : (
            <Menu
              size={24}
            />
          )}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={()=>setIsMobileMenuOpen(false)}
                className="py-2 text-lg text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
            <Button>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};
