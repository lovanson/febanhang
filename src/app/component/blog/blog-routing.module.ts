import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdetailsCenterComponent } from './blog-details/blogdetails-center/blogdetails-center.component';
import { BlogdetailsLeftComponent } from './blog-details/blogdetails-left/blogdetails-left.component';
import { BlogdetailsRightComponent } from './blog-details/blogdetails-right/blogdetails-right.component';
import { BloggridCenterComponent } from './blog-grid/bloggrid-center/bloggrid-center.component';
import { BloggridLeftComponent } from './blog-grid/bloggrid-left/bloggrid-left.component';
import { BloggridRightComponent } from './blog-grid/bloggrid-right/bloggrid-right.component';
import { BloglistCenterComponent } from './blog-list/bloglist-center/bloglist-center.component';
import { BloglistLeftComponent } from './blog-list/bloglist-left/bloglist-left.component';
import { BloglistRightComponent } from './blog-list/bloglist-right/bloglist-right.component';
import { SwitcherComponent } from './switcher/switcher.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'switcherone',
        title: 'Templist - switcher',
        component: SwitcherComponent,
      },
    ],
  },
  {
    path: 'blog-grid',
    children: [
      {
        path: 'bloggrid-left',
        title: 'Templist - bloggrid-left',
        component: BloggridLeftComponent,
      },
      {
        path: 'bloggrid-right',
        title: 'Templist - bloggrid-right',
        component: BloggridRightComponent,
      },
      {
        path: 'bloggrid-center',
        title: 'Templist - bloggrid-center',
        component: BloggridCenterComponent,
      },
    ],
  },
  {
    path: 'blog-list',
    children: [
      {
        path: 'bloglist-left',
        title: 'Templist - bloglist-left',
        component: BloglistLeftComponent,
      },
      {
        path: 'bloglist-right',
        title: 'Templist - bloglist-right',
        component: BloglistRightComponent,
      },
      {
        path: 'bloglist-center',
        title: 'Templist - bloglist-center',
        component: BloglistCenterComponent,
      },
    ],
  },
  {
    path: 'blog-details',
    children: [
      {
        path: 'blogdetails-left',
        title: 'Tempdetails - blogdetails-left',
        component: BlogdetailsLeftComponent,
      },
      {
        path: 'blogdetails-right',
        title: 'Tempdetails - blogdetails-right',
        component: BlogdetailsRightComponent,
      },
      {
        path: 'blogdetails-center',
        title: 'Tempdetails - blogdetails-center',
        component: BlogdetailsCenterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
