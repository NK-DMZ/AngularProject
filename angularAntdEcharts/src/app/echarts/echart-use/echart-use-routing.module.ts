import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EchartUseComponent } from './echart-use.component';

const routes: Routes = [
  { path: '', component: EchartUseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchartUseRoutingModule { }
