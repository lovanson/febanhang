import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/layout-components/layout/content-layout/content-layout.component';
import { content } from './shared/routes/routes';
import { LockScreenComponent } from './component/custom-pages/error-pages/lock-screen/lock-screen.component';
import { UnderConstructionComponent } from './component/custom-pages/error-pages/under-construction/under-construction.component';
import { Error404Component } from './component/custom-pages/error-pages/error404/error404.component';
import { Page10LayoutComponent } from './shared/layout-components/layout/page10-layout/page10-layout.component';
import { Homepage10Routes } from './shared/routes/page-10.routes';
import { SwitcherLayoutComponent } from './shared/layout-components/layout/switcher-layout/switcher-layout.component';
import { SwitcherOneRoute } from './shared/routes/switcher';

const routes: Routes = [

   { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
   {
     path: '',
     loadChildren: () =>
       import('./authentication/authentication.module').then(
         (m) => m.AuthenticationModule
       ),
   },
  {
    path: '',
    redirectTo: 'home/home-page01',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: content,
  },
  {
    path: '',
    component: Page10LayoutComponent,
    children: Homepage10Routes,
  },
  {
    path: '',
    component: SwitcherLayoutComponent,
    children: SwitcherOneRoute,
  },
  {
    path: '',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'custom-pages',
    children: [
      {
        path: 'lock-screen',
        title: 'Templist - Lock-Screen',
        component: LockScreenComponent,
      },
      {
        path: 'under-construction',
        title: 'Templist - Under-Construction',
        component: UnderConstructionComponent,
      },
      {
        path: 'error404',
        title: 'Templist - Error404',
        component: Error404Component,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/custom-pages/error404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
