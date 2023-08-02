import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFooterRoutingModule } from './header-footer-routing.module';
import { HeaderStyle01Component } from './header-style01/header-style01.component';
import { HeaderStyle02Component } from './header-style02/header-style02.component';
import { HeaderStyle03Component } from './header-style03/header-style03.component';
import { HeaderStyle04Component } from './header-style04/header-style04.component';
import { FooterStyle01Component } from './footer-style01/footer-style01.component';
import { FooterStyle02Component } from './footer-style02/footer-style02.component';
import { FooterStyle03Component } from './footer-style03/footer-style03.component';
import { FooterStyle04Component } from './footer-style04/footer-style04.component';
import { SharedModule } from "src/app/shared/shared.module";
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderStyle01Component,
    HeaderStyle02Component,
    HeaderStyle03Component,
    HeaderStyle04Component,
    FooterStyle01Component,
    FooterStyle02Component,
    FooterStyle03Component,
    FooterStyle04Component,

  ],
  imports: [
    CommonModule,
    HeaderFooterRoutingModule,
    SharedModule,
    CarouselModule,
    NgbModule
  ],
  exports: [

  ],
})
export class HeaderFooterModule {}
