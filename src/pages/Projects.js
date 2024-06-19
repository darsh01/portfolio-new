import React, { useState, useEffect, useRef } from 'react';
import { FaFolderOpen } from 'react-icons/fa'; 
import './Projects.css';

const projects = [
  {
    title: "Stock Market Prediction",
    description: "The Stock Market Predictor model leverages LSTM and time series analysis to forecast market trends with high accuracy.",
    img: "./Stockmarket.jpeg", // replace with actual image path
    repo: "https://github.com/darsh01/Stock-Market-Prediction-Using-Machine-Learning-LSTM-Model-",
    detailedDescription: `
A comprehensive stock market prediction project was designed and implemented using machine learning techniques, focusing on Long Short-Term Memory (LSTM) networks. The primary objective of this project is to predict stock market trends with high accuracy through the application of Time Series Analysis. The model was applied to the TATA Beverage dataset from the National Stock Exchange, achieving a notable prediction accuracy of 89% by optimizing the architecture, particularly through strategic adjustments in hidden layers and epochs.

Implemented an LSTM network to handle sequential data and address vanishing gradient issues, incorporating time series analysis to capture temporal dependencies.
Optimized hyperparameters, including hidden layers, epochs, and the Adam optimizer, to enhance model performance.
Employed TATA Beverage stock data from the National Stock Exchange, including data normalization, handling missing values, and creating training/testing datasets.
Trained and evaluated the model on historical data, achieving high prediction accuracy measured through RMSE, demonstrating the practical application of advanced machine learning techniques.`,
    languages: { Python: 100 },
    tags: ["Python", "Machine Learning"]
  },

  {
    title: "Github Rater",
    description: "GitHub Rater analyzes and scores GitHub profiles to help users improve their coding presence and engagement.",
    img: "./GithubRater.jpeg", // replace with actual image path
    repo: "https://github.com/darsh01/gh-rater",
    detailedDescription: `
Built "RateMyGit," a React-based single-page application leveraging GitHub’s GraphQL API for detailed analysis of metrics including repository activities, star counts, forks, and follower engagement, improving data processing efficiency. Formulated a multifaceted scoring system assessing GitHub profiles across User Popularity, Biography Quality, and Repository Quality, leading to an estimated 30% increase in user interaction with profile features.

Utilized React for building a dynamic and responsive single-page application.
Leveraged JavaScript for implementing core application logic.
Employed GraphQL for querying data from the GitHub API, enabling efficient data retrieval and manipulation.
Implemented features to search GitHub users, gather profile and repository scores, and provide an overall score based on various metrics.
Developed section-specific scores for User Popularity, Biography Quality, and Repository Description Rating, offering actionable suggestions to improve GitHub profiles.
Displayed diagnostic information for a general profile overview, which does not affect the scoring but provides additional insights.`,
    languages: { TypeScript: 67, SCSS: 20, JavaScript: 9, HTML: 4 },
    tags: ["React", "JavaScript", "GraphQL"]
  },

  {
    title: "FUNLANG Programming Language",
    description: "Funlang simplifies coding with its intuitive syntax and robust parsing and evaluation features.",
    img: "./Programming.avif", // replace with actual image path
    repo: "https://github.com/Sdunga1/SER502-Funlang-Team29",
    detailedDescription: `
Build FUNLANG – a programming language designed to make writing code simpler, intuitive, and, most importantly, fun with every line of code. Funlang features a clear and structured approach to parsing and evaluating code, ensuring an enjoyable programming experience.

Utilized Prolog for creating the parser and evaluator components, and Python for the tokenizer.
Employed a Top-down descent parser, specifically a Recursive Descent Parser, where each non-terminal in the grammar corresponds to a parsing function.
Implemented a comprehensive workflow involving a bash script to invoke the tokenizer , which processes the Funlang source code and generates a tokenized file, passed to the Prolog parser to generate a parse tree, and evaluated by the Prolog evaluator.
Supported commands: boolean_assignment, assignment, if_statement, if_else_statement, ternary_statement, while_loop, print_statement, for_range_statement, for_list_statement, func_declaration.
Supported declarations: const_declaration, var_declaration, bool_declaration, var_assignment, bool_assignment, list_declaration, func_declaration, dict_declaration.
Supported data types: Integer, Character, String, Boolean, with operations including addition, subtraction, multiplication, division, and braces, and reserved keywords such as const, var, bool, true, false, not, and, or, if, else, while, print, for, in, range.`,
    languages: { Prolog: 62.8, Python: 18.3, Perl: 10.4, Raku: 6.9, Shell: 1.6 },
    tags: ["Prolog", "Python", "Perl", "Raku", "Shell"]
  },
  {
    title: "Sorting Visualization Algorithms",
    description: "Sorting Visualizer algorithm tool brings sorting algorithms to life with interactive animations and adjustable speeds.",
    img: "./Sort.png", // replace with actual image path
    repo: "https://github.com/darsh01/Sorting-Algorithms",
    detailedDescription: `
A comprehensive Sorting Visualization Algorithm project was designed and implemented using Python’s Tkinter, focusing on Quick sort, Heap sort, and Merge sort algorithms. The primary goal of this project is to enhance user engagement and comprehension by integrating adjustable animation speeds into the visualizations. This interactive tool is specifically designed to aid students and enthusiasts in understanding and comparing different sorting algorithms through dynamic and engaging visual displays.

Utilizes Python as the core programming language, with Tkinter for the graphical user interface and Random for generating datasets.
Custom modules for Bubble Sort, Quick Sort, and Merge Sort algorithms are imported for sorting functionality.
The main window setup includes setting the title, dimensions, and background color using Tkinter’s Tk class.
User inputs are handled with Tkinter widgets (Label, Scale, Button, and ttk.Combobox) to select the algorithm, animation speed, and data parameters.
Data generation and visualization are managed by the Generate and drawData functions, creating bar charts that update in real-time to reflect sorting progress.
Sorting algorithm execution is controlled by the Startalgorithm function, which updates the visualizations and displays performance metrics such as comparisons and swaps, with adjustable animation speeds for enhanced learning.`,
    languages: { Python: 100 },
    tags: ["Python", "Tkinter", "Custom Algorithm Modules"]
  },
  {
    title: "VibeCheck for Twitter",
    description: "This project uses NLP techniques to analyze and classify sentiments from over 10,000 tweets, providing valuable insights.",
    img: "./Sentimental.png", // replace with actual image path
    repo: "https://github.com/darsh01/Twitter-Sentimental-Analysis",
    detailedDescription: `
Leveraged NLTK and TextBlob within Python to conduct sentiment analysis on over 10,000 tweets, demonstrating expertise in utilizing various NLP techniques and programming skills for large-scale data analysis. Classified tweets into positive, negative, and neutral sentiments, enabling detailed sentiment insights and improving the ability to translate complex data into actionable categories for strategic decision-making by at least 40%.

Implemented a data pipeline using Tweepy to fetch tweets and applied regular expressions for data cleaning and preprocessing.
Used TextBlob to calculate subjectivity and polarity scores, classifying tweets into positive, negative, and neutral sentiments.
Visualized results with scatter plots and bar charts to provide a clear understanding of sentiment distribution.
Improved the ability to translate complex data into actionable insights, enhancing strategic decision-making by at least 40%.`,
    languages: { Python: 100 },
    tags: ["Python", "TextBlob", "Tweepy"]
  },

  {
    title: "Scrum Simulation Application",
    description: "This Scrum Simulator enhances team collaboration with integrated task management and user story tracking.",
    img: "./Scrum.jpeg", // replace with actual image path
    repo: "https://github.com/jkpate11/Group_Chaurasia_ser515",
    detailedDescription: `
Crafted a Scrum Simulator Application to improve team collaboration by using PostgreSQL for database integrity and Java with Gradle for backend development. Integrated task sorting and user story tracking into a Scrum tool, boosting operational efficiency by 25% with Spring Boot and designing the UI with JavaFX.

Utilized PostgreSQL for ensuring database integrity and reliable data storage.
Developed the backend using Java and Gradle, providing a robust and scalable foundation.
Employed Spring Boot for application framework, enhancing operational efficiency by 25%.
Designed and implemented the user interface using JavaFX, offering a responsive and intuitive user experience.
Integrated task sorting and user story tracking features to streamline Scrum processes and improve team collaboration.
Ensured seamless interaction between different components, leveraging the strengths of each technology to build an effective Scrum simulation tool.`,
    languages: { Java: 100 },
    tags: ["Java", "Spring Boot", "JavaFX", "PostgreSQL", "Gradle"]
  },
  {
    title: "TicTacToe Project",
    description: "A Tic Tac Toe game that offers an engaging digital experience with a sleek GUI and smart game logic.",
    img: "./Tick.png", // replace with actual image path
    repo: "https://github.com/darsh01/TicTacToeProject",
    detailedDescription: `
Developed an interactive Tic Tac Toe game using Java, incorporating a graphical user interface (GUI) with Swing. The project showcases skills in GUI design, event handling, and game logic implementation, providing an engaging user experience.

Utilized Java and Swing for game logic and GUI implementation.
Implemented game mechanics to handle player turns, check for win conditions, and update the interface accordingly.
Managed user interactions using ActionListener, updating the game state based on player moves.
Provided visual feedback for game outcomes, highlighting winning combinations and displaying the winner.
Added functionality to track and display the score for each player, updating after each game.`,
    languages: { Java: 100 },
    tags: ["Java", "Swing"]
  },
  
  
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [progressWidth, setProgressWidth] = useState(0);
  const carouselRef = useRef(null);
  const iconRef = useRef(null);

  const handleReadMore = (project) => {
    setSelectedProject(project);
    setProgressWidth(0);
    setTimeout(() => {
      setProgressWidth(100);
    }, 100);
  };

  const closePopup = () => {
    setSelectedProject(null);
    setProgressWidth(0);
  };

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  useEffect(() => {
    if (iconRef.current) {
      iconRef.current.classList.add('shake');
      setTimeout(() => {
        iconRef.current.classList.remove('shake');
      }, 500);

      const handleScroll = () => {
        if (iconRef.current) {
          const rect = iconRef.current.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            iconRef.current.classList.add('shake');
            setTimeout(() => {
              iconRef.current.classList.remove('shake');
            }, 500);
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2>
        Projects <FaFolderOpen className="projects-icon" ref={iconRef} />
      </h2>
      <div className="projects-carousel-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <div className="arrow-circle">
            <span className="arrow">&#9664;</span>
          </div>
        </button>
        <div className="projects-carousel" ref={carouselRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="read-more-button">
                <button onClick={() => handleReadMore(project)}>Read more</button>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          <div className="arrow-circle">
            <span className="arrow">&#9654;</span>
          </div>
        </button>
      </div>
      {selectedProject && (
        <div className="project-popup">
          <div className="popup-content">
            <div className="popup-header">
              <h3>{selectedProject.title}</h3>
              <span className="close-icon" onClick={closePopup}>&times;</span>
            </div>
            <p>
              {selectedProject.detailedDescription ? (
                <>
                  <p>{selectedProject.detailedDescription.split('\n\n')[0]}</p>
                  <ul>
                    {selectedProject.detailedDescription.split('\n\n')[1].split('\n').map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                </>
              ) : (
                selectedProject.description
              )}
            </p>
            <div className="tech-stack">
              <h4>Programming Languages:</h4>
              <ul>
                {Object.entries(selectedProject.languages).map(([lang, percent]) => (
                  <li key={lang}>
                    <span>{lang}</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `${progressWidth}%`, maxWidth: `${percent}%` }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tags">
              {selectedProject.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <a href={selectedProject.repo} className="view-project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
