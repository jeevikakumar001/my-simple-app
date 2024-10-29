// src/ThemeContext.js
import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const themes = ['light', 'dark', 'pastel'];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const currentThemeIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentThemeIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
