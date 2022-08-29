import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartDirectiveRoutingModule } from './echart-directive-routing.module';
import { EchartDirectiveComponent } from './echart-directive.component';
import { DataDirectiveDirective } from './directive/data-directive.directive';
import { BasicDirectiveDirective } from './directive/basic-directive.directive';

@NgModule({
  declarations: [
    EchartDirectiveComponent,
    DataDirectiveDirective,
    BasicDirectiveDirective,
  ],
  imports: [
    CommonModule,
    EchartDirectiveRoutingModule,
  ]
})

export class EchartDirectiveModule { }
