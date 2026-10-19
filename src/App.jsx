import "./App.css";
import { HeartPulse } from "lucide-react";

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
  return (
    <header className="site_header">
      <nav className="navbar container" aria-label="Main navigation">
        <button 
        className="menu_toggle"
        type="button"
        ></button>
      </nav>
    </header>
  );
}

function App() {
  return (
    <>
      <Brand />
    </>
  );
}

export default App;
