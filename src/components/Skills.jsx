// src/components/Skills.js
import React from 'react';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiFlask, SiEspressif, SiOpenai } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'MLOps', icon: <SiOpenai /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'ESP32', icon: <SiEspressif /> },
    { name: 'Prompt Engineering', icon: <SiOpenai /> },
  ];

  return (
    <section id="skills" style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Skills</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {skills.map((skill, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', margin: '10px', fontSize: '1.2rem' }}>
            <span style={{ marginRight: '5px' }}>{skill.icon}</span>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
