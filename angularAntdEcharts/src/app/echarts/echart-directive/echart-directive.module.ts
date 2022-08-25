import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartDirectiveRoutingModule } from './echart-directive-routing.module';
import { EchartDirectiveComponent } from './echart-directive.component';
import { EchartsDirectiveDirective } from './directive/echarts-directive.directive';
import { DataDirectiveDirective } from './directive/data-directive.directive';



@NgModule({
  declarations: [
    EchartDirectiveComponent,
    EchartsDirectiveDirective,
    DataDirectiveDirective,
  ],
  imports: [
    CommonModule,
    EchartDirectiveRoutingModule,
  ]
})
export class EchartDirectiveModule { }
