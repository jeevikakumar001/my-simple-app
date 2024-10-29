// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { FaCode, FaProjectDiagram } from 'react-icons/fa';

const ProjectsSection = styled.section`
  text-align: center;
  padding: 40px;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProjectCard = styled.div`
  margin: 15px 0;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  h3 {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.secondary};
    margin-bottom: 10px;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    text-align: center;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 15px;
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

function Projects() {
  const projects = [
    { title: 'E-Commerce Chatbot', description: 'An AI-powered chatbot using GraphRAG for handling customer queries.' },
    { title: 'MLOps LLM Project', description: 'An MLOps project focusing on building large language model-based applications.' },
    { title: 'S&T/R&D Monitoring App', description: 'App-based project for monitoring R&D projects in the Coal sector.' },
  ];

  return (
    <ProjectsSection>
      <h2>
        <FaProjectDiagram style={{ marginRight: '10px' }} />
        Projects
      </h2>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <h3>
            <FaCode style={{ marginRight: '10px' }} />
            {project.title}
          </h3>
          <p>{project.description}</p>
        </ProjectCard>
      ))}
    </ProjectsSection>
  );
}

export default Projects;
