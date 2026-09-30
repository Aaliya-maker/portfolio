import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import "@/index.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
  </>
);

const FocusedPage = ({ children }) => <div className="route-page">{children}</div>;

function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<FocusedPage><About /></FocusedPage>} />
          <Route path="/experience" element={<FocusedPage><Experience /></FocusedPage>} />
          <Route path="/skills" element={<FocusedPage><Skills /></FocusedPage>} />
          <Route path="/projects" element={<FocusedPage><Projects /></FocusedPage>} />
          <Route path="/contact" element={<FocusedPage><Contact /></FocusedPage>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer>
        <div className="site-container footer-inner">
          <p>© {new Date().getFullYear()} Aaliya Khanam</p>
          <p>Senior Software Engineer · Built with React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
