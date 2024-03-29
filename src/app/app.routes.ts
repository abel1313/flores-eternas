import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

    {
        path: 'login',
        loadChildren: () => import('./components/login-flores/routing/routing.module').then(m => m.RoutingModule)
      },
      {
        path: 'flores',
        loadChildren: () => import('./components/flores/routing/routing.module').then(m => m.RoutingModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./components/productos-flores/routing/routing.module').then(m => m.RoutingModule)
      },
      {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];
