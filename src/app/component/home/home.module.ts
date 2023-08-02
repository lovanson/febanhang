import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { Homepage01Component } from './homepage01/homepage01.component';
import { Homepage02Component } from './homepage02/homepage02.component';
import { Homepage03Component } from './homepage03/homepage03.component';
import { Homepage04Component } from './homepage04/homepage04.component';
import { Homepage05Component } from './homepage05/homepage05.component';
import { Homepage06Component } from './homepage06/homepage06.component';
import { Homepage07Component } from './homepage07/homepage07.component';
import { Homepage08Component } from './homepage08/homepage08.component';
import { Homepage09Component } from './homepage09/homepage09.component';
import { Homepage10Component } from './homepage10/homepage10.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    Homepage01Component,
    Homepage02Component,
    Homepage03Component,
    Homepage04Component,
    Homepage05Component,
    Homepage06Component,
    Homepage07Component,
    Homepage08Component,
    Homepage09Component,
    Homepage10Component,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgbNavModule,
    NgSelectModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
