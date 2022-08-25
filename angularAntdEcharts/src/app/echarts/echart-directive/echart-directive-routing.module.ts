import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EchartDirectiveComponent } from './echart-directive.component';

const routes: Routes = [
  { path: '', component: EchartDirectiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchartDirectiveRoutingModule { }
