import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-value-child',
  templateUrl: './router-value-child.component.html',
  styleUrls: ['./router-value-child.component.css'],
})
export class RouterValueChildComponent implements OnInit {
  // 冕哥教的写法
  aidobj: { [props: string]: any } = {};
  // 自己之前出错的写法
  objtest = {};

  get_way: string = `
  <h4>父组件get传值子组件</h4>  
  1.父组件部分传值<b><i>(看router-value-child.component.ts文件,这里被转成HTML了)</i></b>  <br>
    <ul> <li *ngFor="let item of list;let key = index">
    <a [routerLink]="['/routeValueChild']" [queryParams]="{aid:key}">{{key}}-{{item}}</a>
    </li></ul>
  2.子组件接收  <br>
    2.1 在子组件先进行引入  <br>
    &nbsp;&nbsp;  import { ActivatedRoute } from '@angular/router';  <br>
    2.2 constructor中引入  <br>
    &nbsp;&nbsp;  constructor(public route: ActivatedRoute) { }  <br>
    2.3 ngOnInit中使用  <br>
    &nbsp;&nbsp;  this.route.queryParams.subscribe((data) => {  <br>
    &nbsp;&nbsp;&nbsp;&nbsp;    console.log(data);  <br>
    &nbsp;&nbsp;  });  <br>
  `
  get_way_text:string = ``

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.aidobj = data;
      this.objtest = data;
      console.log(data);
    });
  }
}
