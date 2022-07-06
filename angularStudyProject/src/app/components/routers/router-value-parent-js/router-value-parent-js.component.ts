import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-router-value-parent-js',
  templateUrl: './router-value-parent-js.component.html',
  styleUrls: ['./router-value-parent-js.component.css']
})
export class RouterValueParentJsComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  gochild_js(){
    this.router.navigate(['/routeValueChildJs/','123'])
  }
  gorouteOne(){
    this.router.navigate(['/routeOne'])
  }
  gorouteValueChild(){
    // 跳转并进行get传值
    let  queryParams:NavigationExtras = {
      queryParams:{'aid':"gorouteValueChild函数运行"}
    }
    this.router.navigate(['/routeValueChild'],queryParams)
  }
}
