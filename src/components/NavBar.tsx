import { useEffect, useState } from 'react';
import ThemeSelect from './ThemeSelect';

function NavBar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };
  return (
    <header className={`w-full fixed top-0 text-sm leading-6 text-slate-900 ${scrolled ? 'fixed' : 'fixed'}`}>
      <nav className="flex items-center py-2 px-10">
        <div className="flex items-center py-2 mr-auto">Ian Wang</div>
        <a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
          Home
        </a>

        <ThemeSelect />
      </nav>
    </header>
  );
}

export default NavBar;
