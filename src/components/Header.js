import React, { useState } from 'react';
import './Header.css';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="header-logo">
        <h1>Darsh Maniar</h1>
      </div>
      <nav className={`header-nav ${isNavOpen ? 'open' : ''}`}>
        <a href="#about">About</a>
        <a href="#what-i-do">What I Do</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <div className="dark-mode-toggle-container" onClick={toggleDarkMode}>
          <input type="checkbox" className="dark-mode-toggle" checked={isDarkMode} readOnly />
          {isDarkMode ? <FaSun className="dark-mode-icon" /> : <FaMoon className="dark-mode-icon" />}
        </div>
      </nav>
      <button onClick={toggleNav} className="nav-toggle">
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
