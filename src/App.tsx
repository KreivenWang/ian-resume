import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Random } from 'mockjs';
import Nav from './components/Nav';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-slate-300 dark:bg-slate-800">
      <Nav />
      <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={Random.image('400x300', '$666600', 'Hello there')}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <div>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It's easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </div>
          <div className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
