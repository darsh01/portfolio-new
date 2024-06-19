import React, { useEffect, useRef } from 'react';
import './WhatIDo.css';
import { useInView } from 'react-intersection-observer';
import { FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, FaLinux, FaAws, FaDocker, FaCode, FaChartLine, FaCloud } from 'react-icons/fa';
import { SiFirebase, SiTensorflow, SiKubernetes, SiSpring, SiDjango } from 'react-icons/si';

const WhatIDo = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const servicesRef = useRef([]);
  const illustrationRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === illustrationRef.current) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
          } else {
            entry.target.classList.add('stagger-fade-in');
            entry.target.classList.remove('stagger-fade-out');
          }
        } else {
          if (entry.target === illustrationRef.current) {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
          } else {
            entry.target.classList.remove('stagger-fade-in');
            entry.target.classList.add('stagger-fade-out');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (illustrationRef.current) {
      observer.observe(illustrationRef.current);
    }

    if (servicesRef.current) {
      servicesRef.current.forEach((service, index) => {
        if (service) {
          observer.observe(service);
          service.style.transitionDelay = `${index * 0.2}s`;
        }
      });
    }

    return () => {
      if (illustrationRef.current) {
        observer.unobserve(illustrationRef.current);
      }

      if (servicesRef.current) {
        servicesRef.current.forEach((service) => {
          if (service) {
            observer.unobserve(service);
          }
        });
      }
    };
  }, []);

  return (
    <section className="what-i-do" ref={ref}>
      <div className="what-i-do-content">
        <div className="illustration" ref={illustrationRef}>
          <img src="./What.gif" alt="Illustration" />
        </div>
        <div className="description">
          <h2>
            What I Do <FaCode className="what-i-do-icon" />
          </h2>
          <p>Full Stack Developer and DevOps Enthusiast</p>
          <div className="technologies">
            <div className="tech tech-python">
              <FaPython size={40} />
              <span>Python</span>
            </div>
            <div className="tech tech-js">
              <FaJs size={40} />
              <span>JavaScript</span>
            </div>
            <div className="tech tech-react">
              <FaReact size={40} />
              <span>ReactJS</span>
            </div>
            <div className="tech tech-nodejs">
              <FaNodeJs size={40} />
              <span>NodeJS</span>
            </div>
            <div className="tech tech-sql">
              <FaDatabase size={40} />
              <span>SQL</span>
            </div>
            <div className="tech tech-linux">
              <FaLinux size={40} />
              <span>Linux</span>
            </div>
            <div className="tech tech-aws">
              <FaAws size={40} />
              <span>AWS</span>
            </div>
            <div className="tech tech-firebase">
              <SiFirebase size={40} />
              <span>Firebase</span>
            </div>
            <div className="tech tech-docker">
              <FaDocker size={40} />
              <span>Docker</span>
            </div>
            <div className="tech tech-tensorflow">
              <SiTensorflow size={40} />
              <span>TensorFlow</span>
            </div>
            <div className="tech tech-kubernetes">
              <SiKubernetes size={40} />
              <span>Kubernetes</span>
            </div>
            <div className="tech tech-spring">
              <SiSpring size={40} />
              <span>Spring Boot</span>
            </div>
            <div className="tech tech-django">
              <SiDjango size={40} />
              <span>Django</span>
            </div>
          </div>
          <ul className="services">
            <li ref={(el) => (servicesRef.current[0] = el)}>⚡ Develop robust web applications using the MERN stack (MongoDB, Express.js, React, Node.js) </li>
            <li ref={(el) => (servicesRef.current[1] = el)}>⚡ Implement machine learning models for predictive analysis and data-driven decision-making </li>
            <li ref={(el) => (servicesRef.current[2] = el)}>⚡ Design and deploy scalable backend solutions with Django and Spring Boot </li>
            <li ref={(el) => (servicesRef.current[3] = el)}>⚡ Utilize cloud services like AWS and Azure for efficient deployment and management of applications </li>
            <li ref={(el) => (servicesRef.current[4] = el)}>⚡ Optimize and manage databases with PostgreSQL, MongoDB, and MySQL for data integrity and performance </li>
            <li ref={(el) => (servicesRef.current[5] = el)}>⚡ Develop statistical models and data visualizations to enhance business insights and decision-making </li>
            <li ref={(el) => (servicesRef.current[6] = el)}>⚡ Apply advanced data structures and algorithms to solve complex problems efficiently</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
