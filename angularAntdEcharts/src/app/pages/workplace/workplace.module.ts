import { NgModule } from '@angular/core';
import { WorkplaceRoutingModule } from './workplace-routing.module';

import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace.component';


@NgModule({
  declarations: [
    WorkplaceComponent,
  ],
  imports: [
    CommonModule,WorkplaceRoutingModule
  ]
})
export class WorkplaceModule { }
