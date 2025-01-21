import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const projects = [
    {
      name: '2024 Global Crime Rate Analysis',
      description: 'Using bivariate analysis and correlation heatmaps for data processing, along with visualizing the global distribution of crime rates by country.',
      issues: 'Understanding and calculating correlation among multiple variables',
      tools: 'Python, Pandas, Matplotlib, Seaborn, Scikit-Learn, GeoPandas',
      githubLink: 'https://github.com/JYUN-YI/kaggle/blob/main/2024-global-crime-rate-analysis.ipynb',
      image: isDarkMode ? '/media/crime_bw.png' : '/media/crime.png',
    },
    {
      name: 'Lunar Lander',
      description: 'A reinforcement learning model trained using PPO algorithm to master the LunarLander-v2 environment.',
      issues: 'Improve landing precision, optimize fuel usage, and enhance training efficiency.',
      tools: 'Python, Stable-Baselines3, Gymnasium',
      hfLink: 'https://huggingface.co/jyunyilin/ppo-LunarLander-v2/tree/main',
      image: isDarkMode ? '/media/lunar_lander_bw.mp4' : '/media/lunar_lander.mp4',
    },
    {
      name: 'Classic Rock Database',
      description: 'A music database for classic rock enthusiasts.',
      issues: 'Filter by band or singer, playback controls, and more.',
      tools: 'JavaScript, React, JSON, Tailwind CSS',
      demoLink: 'https://6070-classic-rock.vercel.app/',
      githubLink: 'https://github.com/JYUN-YI/cprg306-project',
      image: isDarkMode ? '/media/rock.png' : '/media/rock_colour.png',
    },
    {
      name: 'Sakujo Puzzle Game',
      description: 'A drag-and-drop single-player puzzle game.',
      issues: 'Completing rows earns points and clears the grid.',
      tools: 'React Native, JavaScript, TypeScript, CSS',
      githubLink: 'https://github.com/JYUN-YI/cprg303_b/tree/main/group6_sakujo',
      image: isDarkMode ? '/media/sakujo.png' : '/media/sakujo_colour.png',
    },
    {
      name: 'African Wildlife Illustrated Book',
      description: 'A collection of African wildlife illustrations.',
      issues: 'Created using Python image processing libraries.',
      tools: 'Python, OpenCV, Numpy, Matplotlib, PIL/Pillow',
      demoLink: 'https://my-library-xx.vercel.app/animals',
      githubLink: 'https://github.com/JYUN-YI/IMLP350/blob/main/IMLP350_%E6%9E%97%E5%9D%87%E7%8F%86_Final_Project/IMLP350_otsu_algorithm.ipynb',
      image: isDarkMode ? '/media/animals.png' : '/media/animals_colour.png',
    },
    { 
      name: 'Ukiyo-e Artwork Selling Website',
      description: 'A platform to showcase and sell Ukiyo-e artwork.',
      issues: 'Users can sign up, log in, and browse products or leave a message.',
      tools: 'HTML, CSS(SCSS), JavaScript, Bootstrap',
      demoLink: 'https://ntu-csie-ukiyoe-artprint-web.surge.sh/',
      githubLink: 'https://github.com/JYUN-YI/ukiyoe_web',
      image: isDarkMode ? '/media/ukiyoe.png' : '/media/ukiyoe_colour.png',
    },
  ];

  const handleNext = () => {
    setDirection(1); // Set direction to right
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setDirection(-1); // Set direction to left
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Automatically scroll to the next case every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 15000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-heading">Portfolio</h2>

      <div className="portfolio-slider">
        {/* Left Arrow */}
        <button className="arrow left" onClick={handlePrevious}>
          &lsaquo;
        </button>

        {/* Project Display */}
        <div className="portfolio-view">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className="portfolio-case"
              key={currentIndex}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
              }}
            >
              {projects[currentIndex].image.endsWith('.mp4') ? (
                <video
                  className="portfolio-video"
                  src={projects[currentIndex].image}
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].name}
                  className="portfolio-image"
                />
              )}
              <br />
              <h3 className="portfolio-case-section">
                <strong>{projects[currentIndex].name}</strong>
              </h3>
              <p className="portfolio-case-section">{projects[currentIndex].description}</p>
              <p className="portfolio-case-section">Tools: {projects[currentIndex].tools}</p>
              <div className="portfolio-case-section-links">
                {projects[currentIndex].demoLink && (
                  <a
                    className="portfolio-case-section-links"
                    href={projects[currentIndex].demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                )}
                {projects[currentIndex].demoLink && projects[currentIndex].githubLink && (
                  <span className="portfolio-case-section">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                )}
                {projects[currentIndex].githubLink && (
                  <a
                    className="portfolio-case-section-links"
                    href={projects[currentIndex].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {projects[currentIndex].demoLink && projects[currentIndex].hfLink && (
                  <span className="portfolio-case-section">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                )}
                    {projects[currentIndex].hfLink && (
                    <a
                      className="portfolio-case-section-links"
                      href={projects[currentIndex].hfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hugging Face
                    </a>
                  
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button className="arrow right" onClick={handleNext}>
          &rsaquo;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="dots">
        {projects.map((_, index) => (
          <span
            role="button"
            aria-label={`Go to project ${index + 1}`}
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1); // Adjust animation direction
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
