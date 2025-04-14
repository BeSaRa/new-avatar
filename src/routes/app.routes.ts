import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'avatar',
    loadComponent: () => import('@/views/avatar/avatar.component'),
    pathMatch: 'full',
  },
  {
    path: 'control',
    loadComponent: () => import('@/views/control/control.component'),
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'avatar',
  },
]
