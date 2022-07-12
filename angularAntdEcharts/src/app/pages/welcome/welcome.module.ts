import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { EctartsTestComponent } from './ectarts-test/ectarts-test.component';

@NgModule({
  imports: [WelcomeRoutingModule, NzTableModule,CommonModule],
  declarations: [WelcomeComponent,  EctartsTestComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
