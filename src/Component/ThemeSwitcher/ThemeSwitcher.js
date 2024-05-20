import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css'; 
 
const ThemeSwitcher = () => {
  const darkTheme = 'dark-theme';
  const iconMoon = 'bx-moon';
  const iconSun = 'bx-sun';
 
 
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');
 

  const initialTheme = selectedTheme === 'dark' ? darkTheme : '';
  const initialIcon = selectedIcon === iconSun ? iconSun : iconMoon;
 
  
  const [theme, setTheme] = useState(initialTheme);
  const [icon, setIcon] = useState(initialIcon);
 
  
  useEffect(() => {
    if (initialTheme) {
      document.body.classList.add(darkTheme);
    }
    setIcon(initialIcon);
  }, [initialTheme, darkTheme, initialIcon]);
 
 
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
 
export default ThemeSwitcher;