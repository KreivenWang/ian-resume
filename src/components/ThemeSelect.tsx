import { Theme, ThemeList } from '@/models/theme';
import { useEffect, useState } from 'react';
import Dropdown from './common/Dropdown';

function ThemeSelect(): JSX.Element {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.theme) setTheme(localStorage.theme);
  }, []);

  useEffect(() => {
    // Whenever the user explicitly chooses light mode
    if (theme === Theme.light) localStorage.theme = 'light';

    // Whenever the user explicitly chooses dark mode
    if (theme === Theme.dark) localStorage.theme = 'dark';

    // Whenever the user explicitly chooses to respect the OS preference
    if (theme === Theme.system) localStorage.removeItem('theme');

    const mediaMatch = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (
      localStorage.theme === Theme.dark ||
      (!('theme' in localStorage) && mediaMatch)
    ) {
      document.documentElement.classList.add(Theme.dark);
    } else {
      document.documentElement.classList.remove(Theme.dark);
    }
  }, [theme]);

  return (
    <Dropdown
      btnContent={<strong>Theme</strong>}
      items={ThemeList.map(t => t + '')}
      handleSelect={t => setTheme(t)}
    />
  );
}

export default ThemeSelect;
