import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const [activeTag, setActiveTag] = useState('Background'); // State to manage active tag

  const renderContent = () => {
    switch (activeTag) {
      case 'Background':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="about-content">
              2017: Graduated with a Bachelor's degree in Information Management from Aletheia University, Taiwan. Gaining fundamental knowledge in programming, database, and project management.<br />
              2017-2019: Self-taught Python, machine learning, and front-end development while contributing to the family business.<br />
              2019-2021: Conducted Android platform testing using ADB commands and manual operations at Askey Computer Corp., Taiwan. Focused on usability, accessibility, performance, stress testing, LAN/WLAN, and TCP/IP.<br />
              2021-2022: Performed Android platform testing through automated and manual processes at Google's stationary point in Taiwan, with expertise in laboratory testing using Anritsu ME7834NR, Amarisoft, and Anite9000.
            </p>
          </motion.div>
        );
      case 'Career Plan':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="about-content">
              I plan to pursue a career in Python, SQL, and related technologies, fueled by my passion for data analysis, image processing, and other AI subfields. <br />
              I also have extensive experience in testing, which gives me great confidence. However, I remain open to taking on new challenges. <br />
              While I won't claim to be fully proficient in the software field, I consistently strive to learn and grow, maintaining a sense of confidence and a commitment to continuous improvement. <br />
              I firmly believe in mutualism and the positive cycle of goodwill that can thrive in society, beginning with me.
            </p>
          </motion.div>
        );
      case 'Education':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="about-content">
              2023-2025: Studying in the program Software Development, Southern Alberta Institute of Technology, Canada. <br />
              In addition to my schoolwork, I participate in speeches and other related activities wherever possible. These experiences not only allow me to absorb more knowledge but also help me build a strong network. Most importantly, I dedicate time to self-study.<br />
              Building on my previous experiences, I have become increasingly proficient in this field rather than starting from scratch. Furthermore, I have developed a clearer understanding of my interests and career direction.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="about-container"
      ref={ref}
    >
      <div className="kimberly-lin-photo">
        <motion.img
          src={isDarkMode ? "/media/Kimberlylin_2.png" : "/media/k_colour.JPG"}
          className="about-photo"
          alt="Kimberly Lin"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            border: isDarkMode ? "var(--dark-border)" : "var(--light-border)", // Dynamic border color
          }}
        />
      </div>
      <div className="about-text">
        <motion.h2
          className="about-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          About
        </motion.h2>
        <div className="sub-tags">
          {['Background', 'Career Plan', 'Education'].map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`sub-tag-button ${activeTag === tag ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>
        <div className="content-section">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default About;
