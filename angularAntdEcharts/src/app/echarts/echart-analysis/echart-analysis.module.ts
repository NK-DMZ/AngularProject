import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartAnalysisComponent } from './echart-analysis.component';
import { EchartAnalysisRoutingModule } from './echart-analysis-routing.module';
import { ColumnChartDynComponent } from './column-chart-dyn/column-chart-dyn.component';
import { CountryColumnChartComponent } from './country-column-chart/country-column-chart.component';

@NgModule({
  declarations: [
    EchartAnalysisComponent,
    ColumnChartDynComponent,
    CountryColumnChartComponent,
  ],
  imports: [
    CommonModule,
    EchartAnalysisRoutingModule,
  ]
})
export class EchartAnalysisModule { }
