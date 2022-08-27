import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EchartLiquidfillComponent } from './echart-liquidfill.component';

const routes: Routes = [
  { path: '', component: EchartLiquidfillComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchartLiquidfillRoutingModule { }
