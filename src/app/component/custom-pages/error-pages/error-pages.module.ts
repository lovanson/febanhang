import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { Error404Component } from './error404/error404.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    UnderConstructionComponent,
    Error404Component,
    LockScreenComponent,
    
  ],
  imports: [
    CommonModule,
    ErrorPagesRoutingModule,
    RouterModule
  ]
})
export class ErrorPagesModule { }
