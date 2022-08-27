import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartLiquidfillComponent } from './echart-liquidfill.component';
import { EchartLiquidfillRoutingModule } from './echart-liquidfill-routing.module';



@NgModule({
  declarations: [
    EchartLiquidfillComponent,
  ],
  imports: [
    CommonModule,
    EchartLiquidfillRoutingModule
  ]
})
export class EchartLiquidfillModule { }
