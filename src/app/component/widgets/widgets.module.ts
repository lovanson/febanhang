import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [WidgetsComponent],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule,
    SharedModule,
    NgSelectModule,

  ],
})
export class WidgetsModule {}
