import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { SwitcherComponent } from './switcher/switcher.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogDetailsModule } from './blog-details/blog-details.module';
import { BlogGridModule } from './blog-grid/blog-grid.module';
import { BlogListModule } from './blog-list/blog-list.module';
import { NgxColorsModule } from 'ngx-colors';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SwitcherComponent],
  imports: [CommonModule, BlogRoutingModule, SharedModule,BlogDetailsModule,BlogGridModule,BlogListModule,NgxColorsModule,FormsModule,ReactiveFormsModule],
  })
export class BlogModule {}
