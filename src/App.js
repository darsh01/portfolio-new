import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import WhatIDo from './pages/WhatIDo';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleHashChange = () => {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70, // Adjust the offset value as needed
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <section id="home">
        <Home />
      </section>
      <section id="about" className="section-offset">
        <About />
      </section>
      <section id="what-i-do" className="section-offset">
        <WhatIDo />
      </section>
      <section id="experience" className="section-offset">
        <Experience />
      </section>
      <section id="projects" className="section-offset">
        <Projects />
      </section>
      <section id="contact" className="section-offset">
        <ContactMe />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
