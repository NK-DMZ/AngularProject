import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-use',
  templateUrl: './route-use.component.html',
  styleUrls: ['./route-use.component.css']
})
export class RouteUseComponent implements OnInit {
  public route_use: string = `
  1.创建组件 <br>
  2.在app.module.ts中挂载  <br>
  3.在app-routing.module.ts中进行挂载  <br>
    Routes中配置,有两个属性path和component  <br>
  4.匹配不到路由的时候加载组件  <br>
    path: '**', redirectTo: 'routeOne'  <br>
  5.选中时激活css样式  <br>
    routerLinkActive="active"  <br>
  `

  constructor() { }

  ngOnInit(): void {
  }

}
