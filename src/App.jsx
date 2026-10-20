import "./App.css";
import {
  HeartPulse,
  X,
  Menu,
  ArrowUpRight,
  ArrowRight,
  ArrowDownRight,
  ShieldCheck,
} from "lucide-react";
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
            className="button button_navbar button_primary"
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
      <div className="hero_wash" aria-hidden="true">
        <div className="hero_grid-container container">
          <div className="hero_description-container">
            <p className="hero_eyebrow">
              <span className="eyebrow_dot" />A clearer path to good care
            </p>
            <h1 className="hero_heading">
              Smart healthcare is here. <br /> <span>No more long queues.</span>
            </h1>
            <p className="hero_description-text">
              Medic-FI is building a better way to check real-time hospital bed
              availability, book specialist appointments, and access emergency
              care across Kano state and nation wide.
            </p>
            <div className="hero_actions">
              <a href="#vision" className="button button_primary">
                Explore our vision <ArrowRight size={17} />
              </a>
              <a href="#about" className=" button button_secondary text_link">
                Get know us <ArrowDownRight size={17} />
              </a>
            </div>
            <div className="hero_note">
              <ShieldCheck size={17} />
              Thoughtfully design around people and care.
            </div>
          </div>
          <div className="hero_img-container">
            <div className="hero_img-frame">
              <img
                className="hero_img"
                src="/images/hero_img.png"
                alt="healthcare professional in white coat"
              />
              <div className="hero_side-label">Healthcare closer to you.</div>
            </div>
          </div>
        </div>
        <div className="hero_bottom container">
          <span>Built around simple belief</span>
          <span className="hero_bottom-line"></span>
          <span>Access should be easier to navigate</span>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section about">
      <div className="about_grid-container container">
        <div className="section_label">ABOUT MEDIC-FI</div>
        <div className="about_main">
          <h2 id="aboutHeading">A better healthcare experience begins with <span>understanding.</span></h2>
          <div className="about_body">
            <p>When someone needs care, knowing where to start can be difficult. Information may feel scattered, the next step may be unclear, and the journey can become stressful than it needs to be.</p>
            <p>Medic-FI is being developed around the idea that healthcare should be easier to navigate. We're are working toward a more connected experience for people seeking care and the professionals who support them.</p>
          </div>
          <a className="text_link text_link-dark" href="#principles">What guide us <ArrowRight size={17} /></a>
        </div>
        <div className="about_side">
          <div className="about_monogram"><HeartPulse size={45} strokeWidth={1.5} /></div>
          <p className="about_side-quote">"Make the next step in healthcare feel clearer."</p>
          <span>THE IDEA BEHIND MEDIC-FI</span>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}

export default App;
