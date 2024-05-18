import React, { useState, useEffect } from 'react';
import '../../App.css'; // Ensure this file includes the CSS you provided

const ThemeToggle = () => {
  const darkTheme = 'dark-theme';
  const iconMoon = 'bx-moon';
  const iconSun = 'bx-sun';

  // Get previously selected theme and icon from localStorage
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  // Determine initial states
  const initialTheme = selectedTheme === 'dark' ? darkTheme : '';
  const initialIcon = selectedIcon === iconSun ? iconSun : iconMoon;

  // State for theme and icon
  const [theme, setTheme] = useState(initialTheme);
  const [icon, setIcon] = useState(initialIcon);

  // Effect to apply the theme and icon on initial render
  useEffect(() => {
    if (initialTheme) {
      document.body.classList.add(darkTheme);
    }
    setIcon(initialIcon);
  }, [initialTheme, darkTheme, initialIcon]);

  // Function to toggle theme and icon
  const toggleTheme = () => {
    const newTheme = theme === darkTheme ? '' : darkTheme;
    const newIcon = icon === iconMoon ? iconSun : iconMoon;

    setTheme(newTheme);
    setIcon(newIcon);

    if (newTheme === darkTheme) {
      document.body.classList.add(darkTheme);
    } else {
      document.body.classList.remove(darkTheme);
    }

    localStorage.setItem('selected-theme', newTheme === darkTheme ? 'dark' : 'light');
    localStorage.setItem('selected-icon', newIcon);
  };

  return (
    <i
      className={`bx ${icon} change-theme`}
      id="theme-button"
      onClick={toggleTheme}
    ></i>
  );
};

export default ThemeToggle;
