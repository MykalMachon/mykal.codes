import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';

const ThemeSelect = () => {

  const [theme, setTheme] = useState('dark');
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // load in cache, update state
    const cachedTheme = window.localStorage.getItem('theme') || 'dark';
    changeTheme(cachedTheme);
    setTheme(cachedTheme);
    // enable button
    if(buttonRef) buttonRef.current.disabled = false;
  }, [])

  const changeTheme = (theme) => {
    // select html element
    const htmlEl = document.querySelector('html');
    // update the themes
    htmlEl.className = "";
    htmlEl.classList.add(`theme__${theme}`);
    // update state to match changes
    setTheme(theme);
    window.localStorage.setItem('theme', theme);
  }

  const toggleTheme = () => {
    if(theme === 'dark') changeTheme('light')
    else if(theme === 'light') changeTheme('dark')
  }

  return (
    <button className="btn--small" onClick={toggleTheme} ref={buttonRef} disabled>{theme == 'dark' ? 'Light' : 'Dark'} Theme</button>
  )
}

export default ThemeSelect;