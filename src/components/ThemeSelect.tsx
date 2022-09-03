import { MouseEventHandler, useEffect, useState } from 'react';

function ThemeSelect(): JSX.Element {
  const [theme, setTheme] = useState('light');
  const [open, setOpen] = useState(false);

  function openSelect() {
    setOpen(!open);
  }

  useEffect(() => {
    if (localStorage.theme) setTheme(localStorage.theme);
  }, []);

  useEffect(() => {
    // Whenever the user explicitly chooses light mode
    if (theme === 'light') localStorage.theme = 'light';

    // Whenever the user explicitly chooses dark mode
    if (theme === 'dark') localStorage.theme = 'dark';

    // Whenever the user explicitly chooses to respect the OS preference
    if (theme === 'system') localStorage.removeItem('theme');

    const mediaMatch = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && mediaMatch)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleSelectTheme: MouseEventHandler<HTMLLIElement> = e => {
    const value = (e.target as HTMLLIElement).innerText;
    setTheme(value);
  };

  return (
    <div className="relative inline-block">
      <button
        className="px-4 py-2 bg-orange-100 rounded-lg border-indigo-500 hover:bg-orange-400 hover:text-white active:bg-orange-600"
        onClick={openSelect}
      >
        Theme
      </button>
      {open ? (
        <ul
          className={`absolute z-50 top-full left-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300`}
        >
          {['light', 'dark', 'system'].map(t => (
            <li
              key={t}
              onClick={handleSelectTheme}
              className={`py-1 px-2 flex items-center cursor-pointer hover:text-sky-700 ${
                t === theme ? 'text-sky-500' : ''
              }`}
            >
              {t}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default ThemeSelect;
