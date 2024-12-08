import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      
      <a
        href="https://github.com/chamikathereal"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/chamikathereal"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://www.instagram.com/chamikathereal"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

    </div>
  );
};

export default Social;
