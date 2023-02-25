/* @refresh reload */
import 'windi.css';

import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './app';

export const ROOT_URL = location.href.includes('github') ? '/pet-match-wh/' : '/';

const root = document.getElementById('root');

if (localStorage.getItem('dark') === 'true') {
  document.body.classList.add('dark');
}

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  root,
);
