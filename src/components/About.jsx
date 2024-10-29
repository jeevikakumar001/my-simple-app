// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { FaLaptopCode } from 'react-icons/fa';

const AboutSection = styled.section`
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
  }

  p {
    font-family: 'Courier New', Courier, monospace;
  }
`;

function About() {
  return (
    <AboutSection>
      <h2>
        <FaLaptopCode style={{ marginRight: '10px' }} />
        About Me
      </h2>
      <p>I'm a 3rd-year Software Engineering student passionate about building impactful software solutions.</p>
      <p>Skilled in front-end and back-end development, and proficient with React, Python, and MLOps.</p>
    </AboutSection>
  );
}

export default About;
