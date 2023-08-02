import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderStyle01Component } from './header-style01/header-style01.component';
import { HeaderStyle02Component } from './header-style02/header-style02.component';
import { FooterStyle01Component } from './footer-style01/footer-style01.component';
import { FooterStyle02Component } from './footer-style02/footer-style02.component';
import { FooterStyle03Component } from './footer-style03/footer-style03.component';
import { HeaderStyle03Component } from './header-style03/header-style03.component';
import { HeaderStyle04Component } from './header-style04/header-style04.component';
import { FooterStyle04Component } from './footer-style04/footer-style04.component';

const routes: Routes = [
  {
    path: 'header-footer',
    children: [
        {
          path: 'header-style01',
          title: 'Templist - header-style01',
          component: HeaderStyle01Component,
       },
      {
        path: 'header-style02',
        title: 'Templist - header-style02',
        component: HeaderStyle02Component,
      },
      {
        path: 'header-style03',
        title: 'Templist - header-style03',
        component: HeaderStyle03Component,
      },
      {
        path: 'header-style04',
        title: 'Templist - header-style04',
        component: HeaderStyle04Component,
      },
      {
        path: 'footer-style01',
        title: 'Templist - footer-style01',
        component: FooterStyle01Component,
      },
      {
        path: 'footer-style02',
        title: 'Templist - footer-style02',
        component: FooterStyle02Component,
      },
      {
        path: 'footer-style03',
        title: 'Templist - footer-style03',
        component: FooterStyle03Component,
      },
      {
        path: 'footer-style04',
        title: 'Templist - footer-style04',
        component: FooterStyle04Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderFooterRoutingModule {}
