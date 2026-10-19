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
      <Brand />
      <nav className="navbar container" aria-label="Main navigation">
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
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about">About</a>
          <a href="#vision">Our Vision</a>
          <a href="#principles">Our Approach</a>
          <a href="#contact" className="button button_navbar">
            Get in Touch <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
