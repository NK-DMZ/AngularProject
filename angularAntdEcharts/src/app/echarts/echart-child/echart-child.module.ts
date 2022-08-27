import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartChildComponent } from './echart-child.component';
import { EchartChildRoutingModule } from './echart-child-routing.module';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    EchartChildComponent,
    ChildComponent
  ],
  imports: [
    CommonModule, 
    EchartChildRoutingModule
  ],
})
export class EchartChildModule { }
