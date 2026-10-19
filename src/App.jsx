import "./App.css";
import { HeartPulse, X, Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";

function Brand() {
  return (
    <a href="#home" className="brand" aria-label="Medic-FI home">
      <span className="brand_icon" aria-label="true">
        <HeartPulse size={25} stroke={2.2} />
      </span>
      <span className="brand_word">
        Medic<span>-FI</span>
      </span>
    </a>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site_header">
      <nav className="navbar container" aria-label="Main navigation">
        <Brand />
        <button
          className="menu_toggle"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <div className={`navbar_links ${menuOpen ? "navbar_links-open" : ""}`}>
          <div className="navbar_main-links">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#vision" onClick={closeMenu}>
              Our Vision
            </a>
            <a href="#principles" onClick={closeMenu}>
              Our Approach
            </a>
          </div>

          <a
            href="#contact"
            onClick={closeMenu}
            className="button button_navbar"
          >
            Get in Touch <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero_wash" aria-hidden="true"></div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </>
  );
}

export default App;
