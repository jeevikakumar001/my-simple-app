// src/App.js
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './ThemeContext';
import { lightTheme, darkTheme, pastelTheme } from './themes';
import { GlobalStyles } from './GlobalStyles';
import { FaAdjust } from 'react-icons/fa';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  const themeMap = {
    light: lightTheme,
    dark: darkTheme,
    pastel: pastelTheme,
  };

  return (
    <StyledThemeProvider theme={themeMap[theme]}>
      <GlobalStyles />
      <header style={{ textAlign: 'center', padding: '20px 0', backgroundColor: themeMap[theme].headerBackground }}>
        <h1>Kumar Jeevika's Portfolio</h1>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: themeMap[theme].buttonBackground,
            color: themeMap[theme].color,
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FaAdjust style={{ marginRight: '10px' }} />
          Switch to {theme === 'light' ? 'Dark' : theme === 'dark' ? 'Pastel' : 'Light'} Mode
        </button>
      </header>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
