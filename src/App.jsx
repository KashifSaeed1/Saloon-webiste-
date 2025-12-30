import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
