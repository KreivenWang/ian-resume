import ThemeSelect from './ThemeSelect';

function Nav(): JSX.Element {
  return (
    <header className="w-full text-sm leading-6 text-slate-900">
      <nav className="flex items-center py-2 px-10">
        <div className="flex items-center py-2 mr-auto">Ian Wang</div>
        <ThemeSelect />
      </nav>
    </header>
  );
}

export default Nav;
