import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import FindMyPet from './pages/findmypet';
import Pet from './pages/pet';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/findmypet',
    component: FindMyPet
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
