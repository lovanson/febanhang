import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockScreenComponent } from 'src/app/component/custom-pages/error-pages/lock-screen/lock-screen.component';
import { UnderConstructionComponent } from 'src/app/component/custom-pages/error-pages/under-construction/under-construction.component';
import { Error404Component } from 'src/app/component/custom-pages/error-pages/error404/error404.component';

const routes: Routes = [
  {
    path: 'error-pages',
    children: [
      {
        path: 'lock-screen',
        title: 'Templist - lock-screen',
        component: LockScreenComponent,
      },
      {
        path: 'under-construction',
        title: 'Templist - under-construction',
        component: UnderConstructionComponent,
      },
      {
        path: 'error404',
        title: 'Templist - error404',
        component: Error404Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPagesRoutingModule { }
