import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EchartAnalysisComponent } from './echart-analysis.component';

const routes: Routes = [
  { path: '', component: EchartAnalysisComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EchartAnalysisRoutingModule { }
