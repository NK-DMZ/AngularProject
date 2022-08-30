import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartAnalysisComponent } from './echart-analysis.component';
import { EchartAnalysisRoutingModule } from './echart-analysis-routing.module';



@NgModule({
  declarations: [
    EchartAnalysisComponent,
  ],
  imports: [
    CommonModule,
    EchartAnalysisRoutingModule,
  ]
})
export class EchartAnalysisModule { }
