import "./App.css";
import {
  HeartPulse,
  X,
  Menu,
  ArrowUpRight,
  ArrowRight,
  ArrowDownRight,
  ShieldCheck,
  Search,
  Stethoscope,
  HeartHandshake,
  Check,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

const futureAmbitions = [
  {
    icon: Search,
    number: "01",
    title: "Check hospital beds availability",
    description:
      "A smart way designed to help you check hospital beds availability, explore healthcare options clearer and less stressful.",
  },
  {
    icon: Stethoscope,
    number: "02",
    title: "Book Doctor Appointment",
    description:
      "We envision to simpler ways to help you book an appointment with a healthcare professionals and plan the next step when you need it.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Connect the care journey",
    description:
      "A more connected experience designed for people seeking care and the professionals who provide it.",
  },
];

const values = [
  [
    "People first",
    "Every improvement should begin with real needs of people navigating healthcare.",
  ],
  [
    "Clarity over complexity",
    "Useful information should feel understandable, considered and easier to act on.",
  ],
  [
    "Better connected",
    "We believe thoughtful technology can help make healthcare journeys feel less fragmented.",
  ],
];

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
    <section className="section about" aria-labelledby="about-title">
      <div className="about_grid-container container">
        <div className="section_label">ABOUT MEDIC-FI</div>
        <div className="about_main">
          <h2 id="aboutHeading">
            A better healthcare experience begins with{" "}
            <span>understanding.</span>
          </h2>
          <div className="about_body">
            <p>
              When someone needs care, knowing where to start can be difficult.
              Information may feel scattered, the next step may be unclear, and
              the journey can become stressful than it needs to be.
            </p>
            <p>
              Medic-FI is being developed around the idea that healthcare should
              be easier to navigate. We're are working toward a more connected
              experience for people seeking care and the professionals who
              support them.
            </p>
          </div>
          <a className="text_link text_link-dark" href="#principles">
            What guide us <ArrowRight size={17} />
          </a>
        </div>
        <div className="about_aside">
          <div className="about_monogram">
            <HeartPulse size={45} strokeWidth={1.5} />
          </div>
          <p className="about_side-quote">
            "Make the next step in healthcare feel clearer."
          </p>
          <span>THE IDEA BEHIND MEDIC-FI</span>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="section vision" aria-labelledby="vision-title">
      <div className="container">
        <div className="section_heading">
          <div className="section_label section_label-light">
            <span>OUR VISION</span>
          </div>
          <div className="section_heading-row">
            <h2 className="vision_heading">
              A more connected future for <span>healthcare.</span>
            </h2>
            <p>
              Our ambition is to make healthcare journey easier to understand,
              plan, and navigate - one thoughtful step at a time.
            </p>
          </div>
        </div>
        <div className="vision_cards">
          {futureAmbitions.map(({ icon: Icon, number, title, description }) => {
            return (
              <article className="vision_card" key={number}>
                <div className="vision_card-top">
                  <span>{number}</span>
                  <Icon size={23} strokeWidth={1.7} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="vision_card-future">FUTURE DIRECTION</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="section approach" aria-labelledby="approach-title">
      <div className="container approach_grid-container">
        <div className="approach_description-container">
          <div className="section_label">OUR APPROACH</div>
          <h2 className="approach_heading">
            Technology with a <span>human point of view.</span>
          </h2>
          <p>
            Healthcare is personal. The technology around it should respect that
            - with clear information, thoughtful experiences, and a focus on
            people using it.
          </p>
          <div className="approach_seal">
            <Stethoscope size={21} /> <span>Designed with care in mind.</span>
          </div>
        </div>
        <div className="value_list">
          {values.map(([title, description], index) => {
            return (
              <article className="value_item" key={title}>
                <div className="value_item-index">0{index + 1}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <Check size={19} className="value_item-check" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({name: '', email: '', message: ''});
  function clearForm() {
    setForm({
      name: '',
      email: '',
      message: ''
    });
  }
  const companyWhatsApp = '2348146331278';
  const companyEmail = 'nkdatti96@gmail.com';
  function createMessage() {
    return `Hello Medic-FI, 
    My name is ${form.name}.
    My email address is ${form.email}.
    Message: ${form.message}
    `
  }

  function validateForm() {
    const formElement = document.querySelector('.contact_form')

    if (!formElement.reportValidity()) {
      return false
    }
    return true
  }

  function handleWhatsApp() {

    if (!validateForm()) return
    const message = encodeURIComponent(createMessage());
    const whatsappURL = `https://wa.me/${companyWhatsApp}?text=${message}`
    window.open(whatsappURL, '_blank', 'noopener, noreferrer')
    clearForm();
  }

  function handleEmail() {

    if (!validateForm()) return
    const subject = encodeURIComponent(
      'New enquiry from the Medic-FI website'
    )
    const body = encodeURIComponent(createMessage())
    const emailURL = `mailto:${companyEmail}?subject=${subject}&body=${body}`
    clearForm();
    window.location.href = emailURL
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact_grid-container">
        <div className="contact_description-container">
          <div className="section_label">LET'S CONNECT</div>
          <h2 id="contactHeading">Have a thought to <span>share?</span></h2>
          <p>we are shaping the next chapter of Medic-FI. If you are a healthcare professional, potential partner, or simply interested in our vision, we will be glad to hear from you.</p>
          <div className="contact_prompt">
            <MessageCircle size={20} /><span>Start a conversation.<br /><small>Every meaningful connection starts somewhere.</small></span>
          </div>
        </div>
        <form className="contact_form" onSubmit={(event) => event.preventDefault()}>
          <div className="contact_form-heading">
            <span>YOUR MESSAGE</span>
            <span>Fields marked * are required</span>
          </div>
          <label htmlFor="name"><span>Your name<span>*</span></span></label>
          <input type="text" name="name" id="name" autoComplete="name" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="How should we address you?" />
          <label htmlFor="email">Email address<span>*</span></label>
          <input type="email" name="email" id="email" autoComplete="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="you@example.com" />
          <label htmlFor="message">What would like to discuss <span>*</span></label>
          <textarea name="message" id="message" rows={4} required value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Tell us a little about it..."></textarea>
          <div className="contact_form-actions">
            <button className="button button_primary contact_form-submit" type="button" onClick={handleWhatsApp}>
              <MessageCircle size={17}/>
              Send via WhatsApp
            </button>
            <button className="button button_email contact_form-submit" type="button" onClick={handleEmail}>
              <ArrowRight size={17} />
              Send via Email
            </button>
          </div>
          <p className="contact_form-note">
            Choose your preferred contact method. Review your message and press send in WhatsApp or your email application.
          </p>
        </form>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ApproachSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
