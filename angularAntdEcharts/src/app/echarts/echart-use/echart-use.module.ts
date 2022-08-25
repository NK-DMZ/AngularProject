import { NgModule } from '@angular/core';
import { EchartUseRoutingModule } from './echart-use-routing.module';
import { CommonModule } from '@angular/common';
import { ViewChildComponent } from './view-child/view-child.component';
import { IdComponent } from './id/id.component';
import { EchartUseComponent } from './echart-use.component';

@NgModule({
  imports: [
    CommonModule,
    EchartUseRoutingModule
  ],
  declarations: [
    EchartUseComponent,
    ViewChildComponent,
    IdComponent,
  ],
})
export class EchartUseModule { }
