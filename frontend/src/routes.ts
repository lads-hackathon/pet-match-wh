import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import Pet from './pages/pet';

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
