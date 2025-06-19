import React, { createContext, useState, useLayoutEffect } from 'react';

export const ThemeContext = createContext();

const THEMES = {
  light: 'lara-light-blue',
  dark: 'lara-dark-blue',
};

const getInitialTheme = () =>
  localStorage.getItem('theme') || THEMES.light;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme());

  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (themeName) => {
    const existing = document.querySelector('link[rel="stylesheet"][href*="theme"]');
    const head = document.querySelector('head');
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://unpkg.com/primereact/resources/themes/${themeName}/theme.css`;
    link.onload = () => {
      if (existing) head.removeChild(existing);
    };
    head.appendChild(link);
  };

  const changeTheme = (newTheme) => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
