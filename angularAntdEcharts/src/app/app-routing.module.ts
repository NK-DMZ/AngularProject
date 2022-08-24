import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkplaceComponent } from './pages/workplace/workplace.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    path: 'workplace', component: WorkplaceComponent
  },
  { path: 'echartsuse', loadChildren: () => import('./pages/echart-use/echart-use.module').then(m => m.EchartUseModule) },
  { path: 'dynamic', loadChildren: () => import('./pages/echart-dynamic/echart-dynamic.module').then(m => m.EchartDynamicModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
