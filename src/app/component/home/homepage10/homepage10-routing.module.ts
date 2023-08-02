import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage10Component } from './homepage10.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home-page10',
        title: 'Templist - home-page10',
        component: Homepage10Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Homepage10RoutingModule { }
