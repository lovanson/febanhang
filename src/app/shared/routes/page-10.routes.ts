import { Routes } from '@angular/router';

export const Homepage10Routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/component/home/homepage10/homepage10.module').then(
        (m) => m.Homepage10Module
      ),
  },
];
