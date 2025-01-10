import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { AuthGuard } from '../authorization/AuthGuard';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Dashboard', url: '/dashboard'
         },
        { title: 'Starter'},
      ],
    },
  },
];
