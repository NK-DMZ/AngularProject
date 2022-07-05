import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-value-child-dynamic',
  templateUrl: './router-value-child-dynamic.component.html',
  styleUrls: ['./router-value-child-dynamic.component.css'],
})
export class RouterValueChildDynamicComponent implements OnInit {
  dynamic_way: string = `
    <h1>动态路由传值（需要在路由文件【app-routing.module.ts】进行配置）</h1>  
  `;
  constructor() {}

  ngOnInit(): void {}
}
