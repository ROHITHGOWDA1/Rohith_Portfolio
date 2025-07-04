// File: src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Rohith<span style={{ color: '#3b82f6' }}>R</span></h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#summary">Summary</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;