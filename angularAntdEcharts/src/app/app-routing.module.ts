import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkplaceComponent } from './antd/workplace/workplace.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./antd/welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    path: 'workplace', component: WorkplaceComponent
  },
  { path: 'echartsuse', loadChildren: () => import('./echarts/echart-use/echart-use.module').then(m => m.EchartUseModule) },
  { path: 'dynamic', loadChildren: () => import('./echarts/echart-dynamic/echart-dynamic.module').then(m => m.EchartDynamicModule) },
  { path: 'directive', loadChildren: () => import('./echarts/echart-directive/echart-directive.module').then(m => m.EchartDirectiveModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
