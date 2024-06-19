import React, { useEffect, useRef } from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const aboutRef = useRef(null);
  const handRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          handRef.current.classList.add('shake');
          setTimeout(() => {
            handRef.current.classList.remove('shake');
          }, 500);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Trigger the shake animation on page load
    handRef.current.classList.add('shake');
    setTimeout(() => {
      handRef.current.classList.remove('shake');
    }, 500);
  }, []);

  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about-container" ref={aboutRef}>
      <div className="about-text">
        <h1>
          Hey, I'm Darsh <span className="wave-hand" ref={handRef} role="img" aria-label="wave">👋</span>
        </h1>
        <p>
          I'm a passionate technologist dedicated to creating scalable and impactful solutions <span role="img" aria-label="lightbulb">💡</span>. My strengths lie in rapid learning <span role="img" aria-label="rocket">🚀</span> and effective prioritization <span role="img" aria-label="checkmark">✅</span>. I have professional experience in web development <span role="img" aria-label="computer">💻</span> and machine learning <span role="img" aria-label="robot">🤖</span>, with strong knowledge of data structures <span role="img" aria-label="books">📚</span>, algorithms, React.js, and SQL. I enjoy applying my coding skills to space <span role="img" aria-label="satellite">🛰️</span> and finance <span role="img" aria-label="chart">📈</span> projects.
        </p>
        <p>
          I build models that combine software engineering and deep learning techniques <span role="img" aria-label="gear">⚙️</span>. Some of my many work includes developing tools for software asset management and compliance, enhancing Earth observation and forecasting models.
        </p>
        <p>
          Always eager to connect and collaborate <span role="img" aria-label="handshake">🤝</span>, feel free to reach out if you have a project in mind or just want to chat!
        </p>
        <div className="social-icons">
          <a href="https://github.com/darsh01" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/darsh-maniar-368246201/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="mailto:dhmaniar01@gmail.com"><FaEnvelope size={30} /></a>
        </div>
        <div className="about-buttons">
          <button className="contact-button" onClick={handleContactClick}>Contact Me</button>
          <button className="resume-button" onClick={() => window.open('https://drive.google.com/file/d/1X1M-oYbjiWNPyadsDHBll1lrbfBStLz9/view?usp=sharing', '_blank')}>See My Resume</button>
        </div>
      </div>
      <div className="about-illustration">
        <img src="/Aboutme.png" alt="Illustration" />
      </div>
    </div>
  );
};

export default About;
