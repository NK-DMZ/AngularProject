import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
import { EctartsTestComponent } from './ectarts-test/ectarts-test.component';

import { NzTableModule } from 'ng-zorro-antd/table';
@NgModule({
  imports: [WelcomeRoutingModule, NzTableModule,CommonModule],
  declarations: [WelcomeComponent,  EctartsTestComponent,],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
