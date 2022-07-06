import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-router-value-child-dynamic',
  templateUrl: './router-value-child-dynamic.component.html',
  styleUrls: ['./router-value-child-dynamic.component.css'],
})
export class RouterValueChildDynamicComponent implements OnInit {
  dynamic_way: string = `
    <h1>动态路由传值(需要在路由文件【app-routing.module.ts】进行配置)</h1>  
    1.配置动态路由(在router-value-parent.component.html)文件  <br>
    2.子组件接收  <br>
      2.1 在子组件先进行引入  <br>
        &nbsp;&nbsp;  import { ActivatedRoute } from '@angular/router';  <br>
      2.2 constructor中引入  <br>
        &nbsp;&nbsp;  constructor(public route: ActivatedRoute) { }  <br>
      2.3 ngOnInit中使用  <br>
        &nbsp;&nbsp;  this.route.queryParams.subscribe((data) => {  <br>
        &nbsp;&nbsp;&nbsp;&nbsp;    console.log(data);  <br>
        &nbsp;&nbsp;  });  <br>
  `;
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      // this.aidobj = data;
      // this.objtest = data;
      console.log(data);
    });
  }
}
