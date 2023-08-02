import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogdetailsLeftComponent } from './blogdetails-left/blogdetails-left.component';
import { BlogdetailsRightComponent } from './blogdetails-right/blogdetails-right.component';
import { BlogdetailsCenterComponent } from './blogdetails-center/blogdetails-center.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BlogdetailsLeftComponent,
    BlogdetailsRightComponent,
    BlogdetailsCenterComponent,
  ],
  imports: [CommonModule, BlogDetailsRoutingModule, SharedModule,NgbModule],
})
export class BlogDetailsModule {}
