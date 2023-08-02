import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level3RoutingModule } from './level-3-routing.module';
import { Level11Component } from './level11/level11.component';
import { Level12Component } from './level12/level12.component';
import { Level13Component } from './level13/level13.component';


@NgModule({
  declarations: [
    Level11Component,
    Level12Component,
    Level13Component
  ],
  imports: [
    CommonModule,
    Level3RoutingModule
  ]
})
export class Level3Module { }
