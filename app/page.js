"use client";
import React, { useState, useEffect } from "react";
import Introduce from "./Introduce";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Page = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);  // Default is light mode
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);  // Track theme load state

  // Load the theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";  // Default to light if no saved theme
    setIsDarkMode(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    setIsThemeLoaded(true); // Mark theme as loaded
  }, []);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    const theme = newMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", theme); // Save theme to localStorage
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isThemeLoaded) {
    // If theme isn't loaded, hide the content until it's ready
    return null; // Or a loading spinner, depending on your preference
  }

  return (
    <div className={`container ${isDarkMode ? "dark" : "light"}`}>
      <header className="header">
        <button
          className="kimberly-lin-btn"
          onClick={() => window.location.reload()}
        >
          <img
            src={isDarkMode ? "/media/Moth_web.png" : "/media/Moth_web_b.png"}
            alt="Moth Web"
            className="button-img"
          />
          Kimberly Lin
        </button>
        <nav className="nav">
          <button onClick={() => scrollToSection("about-section")}>About</button>
          <button onClick={() => scrollToSection("portfolio-section")}>
            Portfolio
          </button>
          <button onClick={() => scrollToSection("contact-section")}>
            Contact
          </button>
          <button onClick={toggleMode} className="mode-toggle">
            {isDarkMode ? "☀︎" : "☽"}
          </button>
        </nav>
      </header>

      <div id="Introduce-section" className="section">
        <Introduce />
      </div>
      <div id="about-section" className="section">
        <About isDarkMode={isDarkMode} />
      </div>
      <div id="portfolio-section" className="section">
        <Portfolio isDarkMode={isDarkMode} />
      </div>
      <div id="contact-section" className="section">
        <Contact isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Page;
