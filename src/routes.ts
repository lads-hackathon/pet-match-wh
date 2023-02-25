import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/Home';
import Pet from './pages/Pet';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/pet/:id',
    component: Pet
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
