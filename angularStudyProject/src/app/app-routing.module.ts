import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteOneComponent } from './components/routers/route-one/route-one.component';
import { RouteThreeComponent } from './components/routers/route-three/route-three.component';
import { RouteTwoComponent } from './components/routers/route-two/route-two.component';
import { RouterValueChildDynamicComponent } from './components/routers/router-value-child-dynamic/router-value-child-dynamic.component';
import { RouterValueChildComponent } from './components/routers/router-value-child/router-value-child.component';
import { RouterValueParentComponent } from './components/routers/router-value-parent/router-value-parent.component';

const routes: Routes = [
  {
    path: 'routeOne', component: RouteOneComponent
  },
  {
    path: 'routeTwo', component: RouteTwoComponent
  },
  {
    path: 'routeThree', component: RouteThreeComponent
  },
  {
    path: 'routeValueParent', component: RouterValueParentComponent
  },
  {
    path: 'routeValueChild', component: RouterValueChildComponent
  },
  {
    path: 'routeValueChildDynamic/:aid', component: RouterValueChildDynamicComponent
  },
  // 未匹配到的路由都会跳转到这个组件
  // {
  //   path: '**', redirectTo: 'routeOne'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
