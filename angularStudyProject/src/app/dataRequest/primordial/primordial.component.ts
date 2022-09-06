import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios'
import { HttpserviceService } from '../../services/httpservice.service';

@Component({
  selector: 'app-primordial',
  templateUrl: './primordial.component.html',
  styleUrls: ['./primordial.component.css']
})
export class PrimordialComponent implements OnInit {
  constructor(public http: HttpClient, public httpService: HttpserviceService) { }

  public get_use: string = `
  1.先在app.module.ts中引入 import { HttpClientModule } from '@angular/common/http' <br>
  2.然后在 imports: [ <br>
    &nbsp; &nbsp; &nbsp; &nbsp;  BrowserModule, <br>
    &nbsp; &nbsp; &nbsp; &nbsp;  AppRoutingModule, <br>
    &nbsp; &nbsp; &nbsp; &nbsp;  FormsModule, <br>
    &nbsp; &nbsp; &nbsp; &nbsp;  HttpClientModule <br>
  ],中加入 HttpClientModule <br>
  3.再在primordial.component.ts文件中引入import { HttpClient } from '@angular/common/http'; <br>
  4.接着在这个文件中constructor中引入：constructor(public http:HttpClient) { } <br>
  5.然后在函数getFun中进行使用 <br>
  `
  public post_use: string = `
  1.先在app.module.ts中引入 import { HttpClientModule } from '@angular/common/http' <br>
  2.在imports中引入  <br>
  3.在primordial.component.ts文件中引入import { HttpClient, HttpHeaders } from '@angular/common/http';  <br>
  4.函数postFun进行使用  <br>
  `
  public jsonp_use: string = `
  1.在app.module.ts中引入import { HttpClientJsonpModule } from '@angular/common/http';  <br>
  2.在imports中引入  <br>
  3.函数jsonpFun中使用  <br>
  `
  public axios_use: string = `
  <b>方案1:  </b>  <br>
  1.安装axios  <br>
    npm install axios --save  <br>
  2.用到的地方引入axios  <br>
  <b>方案2:  </b>  <br>
  1.创建http服务  <br>
    ng g service services/httpservice  <br>
  2.在httpservice.service.ts引入  <br>
    import axios from 'axios'  <br>
  3.axiosGet函数中使用  <br>
  4.在app.module.ts引入  <br>
    import { HttpserviceService } from './services/httpservice.service';  <br>
  5.进行引入  <br>
    providers: [HttpserviceService],  <br>
  6.在primordial.component.ts中引入  <br>
    import { HttpserviceService } from '../../services/httpservice.service';  <br>
  7.在constructor中加入  <br>
    constructor(public http: HttpClient,public httpService:HttpserviceService) { }  <br>
  `
  public get_list_subscribe: any = [];
  public axios_list: any = [];
  public post_resText: any = ""
  public title: any = ""
  public jsonp_resText: any = ""

  ngOnInit(): void { }

  getFun() {
    let api = "https://tenapi.cn/resou/"
    this.http.get(api).subscribe((response: any) => {
      this.get_list_subscribe = response.list;
      this.title = "get原生使用(微博热榜)"
      this.post_resText = "";
      this.jsonp_resText = "";
      this.axios_list = [];
    })
  }

  // 该函数运行需要启动本地服务器 poseUse.js文件
  postFun() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let api = 'http://127.0.0.1/postuse'
    this.http.post(api, { "url": "baidu.com" }, httpOptions).subscribe((res: any) => {
      this.post_resText = res.msg;
      this.title = "post原生使用"
      this.get_list_subscribe = [];
      this.jsonp_resText = "";
      this.axios_list = [];
    })
  }

  // 该函数运行需要启动本地服务器 jsonpUse.js文件
  jsonpFun() {
    // jsonp请求，服务器必须支持jsonp
    let api = "http://127.0.0.1:3000/getscript"
    this.http.jsonp(api, 'callback').subscribe((res) => {
      this.jsonp_resText = res
      this.title = "jsonp原生使用"
      this.get_list_subscribe = [];
      this.post_resText = "";
      this.axios_list = [];
    })
  }

  axiosFunPackaging() {
    let api = "https://tenapi.cn/zhihuresou/"
    this.httpService.axiosGet(api).then((res: any) => {
      this.axios_list = res.data.list;
      this.title = "axios封装使用(知乎热榜)"
      this.get_list_subscribe = [];
      this.post_resText = "";
      this.jsonp_resText = "";
    })
  }

}
