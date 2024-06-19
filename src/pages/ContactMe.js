import React from 'react';
import './ContactMe.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaPhone, FaHandshake } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ContactMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="contact-me" id="contact" ref={ref}>
      <div className="contact-content">
        <h2>Contact Me</h2>
        <h3 className={`hover-effect ${inView ? 'loud-effect' : ''}`}>
          Let's Build Amazing Things Together! <FaHandshake className="handshake-icon" />
        </h3>
        <p>If you have a project in mind, a question to ask, or just want to say hello, I'd love to hear from you! My inbox is always open and I'm eager to connect with like minded individuals.</p>
        <p>While I may not be the most active on social media, LinkedIn is a great place to reach out to me. For inquiries, collaborations, or if you need a copy of my latest resume, feel free to send me an email.</p>
        <div className="contact-info">
          <p><FaPhone /> +1-6236339953</p>
          <p><FaEnvelope /> dhmaniar01@gmail.com</p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/darsh-maniar-368246201/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/darsh01" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:dhmaniar01@gmail.com"><FaEnvelope /></a>
          <a href="https://x.com/Tweet2Darsh" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>
      <div className="contact-image">
        <img src="./Contact.png" alt="Contact Illustration" />
      </div>
    </section>
  );
};

export default ContactMe;
