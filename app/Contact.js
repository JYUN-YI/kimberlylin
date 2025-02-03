"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = ({ isDarkMode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <div ref={ref} className={`contact-container ${isDarkMode ? "dark" : "light"}`}>
      {/* Contact heading with animation */}
      <motion.h2
        className="contact-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a className="contact-heading">Contact</a>
      </motion.h2>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ height: "300px" }}
      >
        <p className="contact-container-content-top">My information below</p>
        <p className="contact-container-content">₊⁺ Let's connect and have good communication and cooperation ⁺₊</p>
        <p className="contact-container-content">⁺₊ I am looking forward to receiving your message ₊⁺</p>
        <br/>
        <div className="contact-container-content">
          <button>
            <a 
              href="https://www.linkedin.com/in/kimjylin/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <img
                src={isDarkMode ? "/media/linkedin_icon_w.png" : "/media/linkedin_icon_b.png"}
                alt="LinedIn"
                className="linkedin_icon"
                style={{
                  width: "auto",  // Set width of the image
                  height: "30px",  // Set height to auto to maintain aspect ratio
                  marginRight: "0px",  // Space between the image and the text
                }}
            />
            </a>
          </button>
          <button>
          <a 
              href="https://github.com/JYUN-YI" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <img
                src={isDarkMode ? "/media/github_icon_w.png" : "/media/github_icon_b.png"}
                alt="GitHub"
                className="github_icon"
                style={{
                  width: "auto",  // Set width of the image
                  height: "30px",  // Set height to auto to maintain aspect ratio
                  marginRight: "10px",  // Space between the image and the text
                    }}
            />
            </a>
          </button>
          <button>
            <a 
              href="https://huggingface.co/jyunyilin" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <img
                src={isDarkMode ? "/media/hugging_face.png" : "/media/hugging_face.png"}
                alt="Hugging Face"
                className="hugging_face"
                style={{
                  width: "auto",  // Set width of the image
                  height: "30px",  // Set height to auto to maintain aspect ratio
                  marginRight: "20px",  // Space between the image and the text
                    }}
            />
            </a>
          </button>
          <button>
          <a 
              href="https://www.kaggle.com/kimberlylin1" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <img
                src={isDarkMode ? "/media/k_icon.png" : "/media/k_icon.png"}
                alt="Kaggle"
                className="k_icon"
                style={{
                  width: "auto",  // Set width of the image
                  height: "30px",  // Set height to auto to maintain aspect ratio
                  marginRight: "20px",  // Space between the image and the text
                    }}
            />
            </a>
          </button>
          <button>
          <a 
              href="https://flowcv.com/resume/a79hg6noot" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <img
                src={isDarkMode ? "/media/resume_icon_w.png" : "/media/resume_icon_b.png"}
                alt="Resume"
                className="resume_icon"
                style={{
                  width: "auto",  // Set width of the image
                  height: "30px",  // Set height to auto to maintain aspect ratio
                  marginRight: "10px",  // Space between the image and the text
                    }}
            />
            </a>
          </button>
        </div>
        {/* Add content here */}
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <img
          src={isDarkMode ? "/media/Moth_web.png" : "/media/Moth_web_b.png"}
          alt="Moth Web"
          style={{
            width: "auto",  // Set width of the image
            height: "20px",  // Set height to auto to maintain aspect ratio
            marginRight: "10px",  // Space between the image and the text
          }}
        />
        © 2025 | kimberlylin
        <img
          src={isDarkMode ? "/media/Moth_web.png" : "/media/Moth_web_b.png"}
          alt="Moth Web"
          style={{
            width: "auto",  // Set width of the image
            height: "20px",  // Set height to auto to maintain aspect ratio
            marginLeft: "10px",  // Space between the image and the text
          }}
        />
      </motion.footer>
    </div>
  );
};

export default Contact;
