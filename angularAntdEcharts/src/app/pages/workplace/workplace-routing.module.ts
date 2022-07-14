import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 需要新增
import { WorkplaceComponent } from './workplace.component';

const routes: Routes = [
  // component需要修改
  { path: '', component: WorkplaceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }

// 模块路由需要创建，根路由需要修改
// <a routerLink="/workplace">Workplace</a>  需要修改