import type { Component } from 'solid-js';
import { Link, useRoutes } from '@solidjs/router';

import { routes } from './routes';
import Toggle from './components/toggle';

const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <div>
      <nav class="p-4 bg-gray-100 dark:bg-dark-800">
        <Link href="/" class="text-5xl font-bold p-4 text-black dark:text-white no-underline fill-white" style="font-family: 'Righteous', 'Inter', sans-serif;">
          PETFINDER
        </Link>

        <div class="float-right">
          <Toggle default={localStorage.getItem('dark') === 'true'} onOn={e => {
            document.body.classList.add('dark');
            localStorage.setItem('dark', 'true');
          }} onOff={e => {
            document.body.classList.remove('dark');
            localStorage.setItem('dark', 'false');
          }} text="Dark mode" />
        </div>
      </nav>

      <main class="h-full" style={{
        "font-family": "'Inter', sans-serif",
      }}>
        <Route />
      </main>
    </div>
  );
};

export default App;
