// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2 {
    color: ${({ theme }) => theme.color};
  }

  section {
    background-color: ${({ theme }) => theme.cardBackground};
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    section {
      padding: 15px;
      max-width: 100%;
      box-sizing: border-box;
    }
  }
`;
