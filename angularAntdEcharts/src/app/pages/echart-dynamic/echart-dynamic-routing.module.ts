import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EchartDynamicComponent } from './echart-dynamic.component';

const routes: Routes = [
  { path: '', component: EchartDynamicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchartDynamicRoutingModule { }
