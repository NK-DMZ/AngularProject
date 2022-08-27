import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EchartChildComponent } from './echart-child.component';

const routes: Routes = [
  { path: '', component: EchartChildComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EchartChildRoutingModule { }
