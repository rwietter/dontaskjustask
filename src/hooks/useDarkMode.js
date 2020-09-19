import { useEffect, useState } from 'react';

function UseDarkMode() {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setThemeMode = (status) => {
    window.localStorage.setItem('theme', status);
    return setTheme(status);
  };

  const toggleTheme = () => {
    return theme === 'light' ? setThemeMode('dark') : setThemeMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    isDark ? setThemeMode('dark') : localTheme ? setTheme(localTheme) : setThemeMode('light');
    setComponentMounted(true);
  }, []);
  return [theme, toggleTheme, componentMounted];
}


export { UseDarkMode };
