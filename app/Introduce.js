import React, { useState, useEffect } from "react";

const Introduce = ({ isDarkMode }) => {
  const [textArray, setTextArray] = useState([]);
  const message = `  Hi\nMy name is Kimberly Lin. I am a Data/ML engineer.\nWelcome to my site — feel free to explore here :)`;

  useEffect(() => {
    let index = 0;
    const splitMessage = message.split(""); // Split message into characters
    const interval = setInterval(() => {
      if (index < splitMessage.length) {
        setTextArray((prev) => [...prev, splitMessage[index]]);
        index++;
      } else {
        clearInterval(interval); // Stop the interval when the message is fully typed
      }
    }, 40); // Adjust typing speed here (milliseconds per letter)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [message]);

  return (
    <h1
      style={{
        color: isDarkMode ? "var(--dark-color)" : "var(--light-color)", // Dynamic text color
        backgroundColor: isDarkMode ? "var(--dark-bg)" : "var(--light-bg)", // Dynamic background
      }}
    >
      {textArray.join("") // Join the array of characters back into a string
        .split("\n") // Split by newline character to break into lines
        .map((line, idx) => (
          <React.Fragment key={idx}>
            {idx === 0 ? ( // Bold the first line's "Hi"
              <>
                <span style={{ fontWeight: "bold" }}>{line.split("")[0]}</span>{""}
                {line.slice(1)}
              </>
            ) : (
              line
            )}
            {idx < textArray.join("").split("\n").length - 1 && (
              <>
                <br />
                {"\u00A0".repeat(3)} {/* Add spaces after each line */}
              </>
            )}
          </React.Fragment>
        ))}
    </h1>
  );
};

export default Introduce;
