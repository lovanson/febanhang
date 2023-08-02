import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListRoutingModule } from './blog-list-routing.module';
import { BloglistLeftComponent } from './bloglist-left/bloglist-left.component';
import { BloglistRightComponent } from './bloglist-right/bloglist-right.component';
import { BloglistCenterComponent } from './bloglist-center/bloglist-center.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BloglistLeftComponent,
    BloglistRightComponent,
    BloglistCenterComponent,
  ],
  imports: [CommonModule, BlogListRoutingModule, SharedModule],
})
export class BlogListModule {}
