import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';
import { FaSuitcase, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import Map from '../components/Map';

const experiences = [
  {
    company: "KPMG",
    title: "Technology Analyst Intern",
    location: "Mumbai, India",
    date: "Jan 2023 - Jul 2023",
    description: [
      "Revamped a Software Asset Management tool incorporating Highcharts, Azure DevOps, and .NET MVC framework resulted in a 97% accuracy in license compliance where possible for a particular publisher.",
      "Programmed statistical models such as Ordinal Logistic Regression and Poisson Regression with Python and TensorFlow for Chartered Accountants, reducing auditing errors by 45% and increasing error detection by 30%."
    ],
    mapLocation: "Mumbai",
  },
  {
    company: "Indian Space Research Organisation (ISRO)",
    title: "Research Intern",
    location: "Ahmedabad, India",
    date: "Aug 2022 - Dec 2022",
    description: [
      "Refined an Ocean Productivity model using PCA for targeted dimensionality reduction, strategically enhancing color mapping and statistical analysis, and boosting data accuracy and interpretability by 25%.",
      "Developed an LSTM-based Cyclone trajectory prediction model for ISRO’s meteorological division, increasing accuracy by 12% through effective teamwork and cross-disciplinary collaboration."
    ],
    mapLocation: "Ahmedabad",
  },
  {
    company: "L&T Technology Services",
    title: "Software Development Intern",
    location: "Vadodara, India",
    date: "May 2022 - Jul 2022",
    description: [
      "Collaborated to develop a safety portal website using MERN stack (MongoDB, Express.js, React, Node.js).",
      "Achieved a 32% reduction in safety-related incidents following development of the Plant Engineering website."
    ],
    mapLocation: "Vadodara",
  }
];

const Experience = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        } else {
          entry.target.classList.remove('slide-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const targets = sectionRef.current.querySelectorAll('.experience-item, .experience-item ul li');

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <h2>
        Experience <FaBriefcase className="experience-icon" />
      </h2>
      <div className="experience-content">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="icon"><FaSuitcase size={30} /></div>
            <div className="details">
              <h3>{exp.company} <span>({exp.title})</span></h3>
              <h4>{exp.date}</h4>
              <div className="location"
                onMouseEnter={() => setHoveredLocation(exp.mapLocation)}
                onMouseLeave={() => setHoveredLocation(null)}>
                <FaMapMarkerAlt size={15} />
                <span>{exp.location}</span>
                {hoveredLocation === exp.mapLocation && (
                  <div className="map-popup">
                    <Map location={exp.mapLocation} />
                  </div>
                )}
              </div>
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i} className="stagger-animation">{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
