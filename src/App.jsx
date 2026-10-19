import './App.css'
import { HeartPulse } from 'lucide-react';

function Brand() {
  return (
    <a href='#home' className='brand' aria-label='Medic-FI home'>
      <span className="brand_icon" aria-label='true'><HeartPulse size={25} stroke={2.2} /></span>
    </a>
  );
}

function App() {
  

  return (
    <>
    </>
  )
}

export default App
