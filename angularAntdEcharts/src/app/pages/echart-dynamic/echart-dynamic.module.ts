import { NgModule } from '@angular/core';

import { EchartDynamicRoutingModule } from './echart-dynamic-routing.module';

import { EchartDynamicComponent } from './echart-dynamic.component';
import { CommonModule } from '@angular/common';
import { EchartDynamicOneComponent } from './echart-dynamic-one/echart-dynamic-one.component';
import { EchartDynamicTwoComponent } from './echart-dynamic-two/echart-dynamic-two.component';
import { LineDirective } from './echart-dynamic-two/line.directive';



@NgModule({
  imports: [
    CommonModule,
    EchartDynamicRoutingModule
  ],
  declarations: [
    EchartDynamicComponent,
    EchartDynamicOneComponent,
    EchartDynamicTwoComponent,
    LineDirective
  ],
  exports: [EchartDynamicComponent]
})
export class EchartDynamicModule { }
