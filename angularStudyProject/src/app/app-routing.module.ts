import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteOneComponent } from './components/routers/route-one/route-one.component';
import { RouteThreeComponent } from './components/routers/route-three/route-three.component';
import { RouteTwoComponent } from './components/routers/route-two/route-two.component';

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
  // {
  //   path: '**', redirectTo: 'routeOne'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
