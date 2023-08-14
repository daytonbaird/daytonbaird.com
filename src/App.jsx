import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(width < 768);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setIsMobile(window.innerWidth < 768);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {!isMobile && <StarsCanvas />}
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
