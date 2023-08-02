import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridRoutingModule } from './blog-grid-routing.module';
import { BloggridLeftComponent } from './bloggrid-left/bloggrid-left.component';
import { BloggridRightComponent } from './bloggrid-right/bloggrid-right.component';
import { BloggridCenterComponent } from './bloggrid-center/bloggrid-center.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BloggridLeftComponent,
    BloggridRightComponent,
    BloggridCenterComponent,
  ],
  imports: [CommonModule, BlogGridRoutingModule, SharedModule],
   })
export class BlogGridModule {}
