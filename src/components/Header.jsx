import React from 'react';
import mainpic from '../assets/mainpic.webp';
import './Header.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Life-changing outcomes</h1>
        <p>
          Shorelight has helped over 31,000 students from around the world study in the US. How can we help you?
          Take our school match quiz to get started.
        </p>
        <button className="cta-button">Find your school &rarr;</button>
      </div>
      <div className="hero-image">
        <img src={mainpic} alt="Student illustration" />
      </div>
    </div>
  );
};

export default HeroSection;