import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { RankComponent } from './rank/rank.component';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    TableComponent,
    RankComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    NzTableModule
  ]
})
export class TableModule { }
