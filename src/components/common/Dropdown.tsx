import { useClickOutside } from '@/hooks/useClickOutside';
import { useRef, useState } from 'react';

export interface DropdownProps {
  btnClass?: string;
  btnContent?: string | JSX.Element;
  items: string[];
  handleSelect: (item: string) => void;
}

function Dropdown(props: DropdownProps): JSX.Element {
  const [activeItem, setActiveItem] = useState<string>('');
  const [open, setOpen] = useState(false);
  const dropdownButton = useRef(null);

  useClickOutside(dropdownButton, () => setOpen(false));

  function openDropdown() {
    setOpen(!open);
  }

  const DefaultDropdown = () => (
    <ul
      className={`absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300`}
    >
      {props.items.map(t => (
        <li
          key={t}
          onClick={() => {
            setActiveItem(t);
            props.handleSelect && props.handleSelect(t);
          }}
          className={`py-1 px-2 flex items-center cursor-pointer hover:text-sky-700 ${
            t === activeItem ? 'text-sky-500' : ''
          }`}
        >
          {t}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative inline-block">
      <button
        ref={dropdownButton}
        className={[
          props.btnClass
            ? props.btnClass
            : 'px-4 py-2 rounded-lg bg-orange-300 hover:bg-orange-400 hover:text-white active:bg-orange-600'
        ]
          .filter(c => c)
          .join(' ')}
        onClick={openDropdown}
      >
        {props.btnContent}
      </button>
      {open ? <DefaultDropdown /> : null}
    </div>
  );
}

export default Dropdown;
