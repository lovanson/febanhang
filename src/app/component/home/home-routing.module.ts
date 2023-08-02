import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage01Component } from './homepage01/homepage01.component';
import { Homepage02Component } from './homepage02/homepage02.component';
import { Homepage03Component } from './homepage03/homepage03.component';
import { Homepage04Component } from './homepage04/homepage04.component';
import { Homepage05Component } from './homepage05/homepage05.component';
import { Homepage06Component } from './homepage06/homepage06.component';
import { Homepage07Component } from './homepage07/homepage07.component';
import { Homepage08Component } from './homepage08/homepage08.component';
import { Homepage09Component } from './homepage09/homepage09.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home-page01',
        title: 'Templist - home-page01',
        component: Homepage01Component,
      },
      {
        path: 'home-page02',
        title: 'Templist - home-page02',
        component: Homepage02Component,
      },
      {
        path: 'home-page03',
        title: 'Templist - home-page03',
        component: Homepage03Component,
      },
      {
        path: 'home-page04',
        title: 'Templist - home-page04',
        component: Homepage04Component,
      },
      {
        path: 'home-page05',
        title: 'Templist - home-page05',
        component: Homepage05Component,
      },
      {
        path: 'home-page06',
        title: 'Templist - home-page06',
        component: Homepage06Component,
      },
      {
        path: 'home-page07',
        title: 'Templist - home-page07',
        component: Homepage07Component,
      },
      {
        path: 'home-page08',
        title: 'Templist - home-page08',
        component: Homepage08Component,
      },
      {
        path: 'home-page09',
        title: 'Templist - home-page09',
        component: Homepage09Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
