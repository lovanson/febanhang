import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleLevelRoutingModule } from './sample-level-routing.module';
import { Level01Component } from './level01/level01.component';
import { Level02Component } from './level02/level02.component';

@NgModule({
  declarations: [
    Level01Component,
    Level02Component
  ],
  imports: [
    CommonModule,
    SampleLevelRoutingModule
  ]
})
export class SampleLevelModule { }
