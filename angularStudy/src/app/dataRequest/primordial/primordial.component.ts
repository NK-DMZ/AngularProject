import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-primordial',
  templateUrl: './primordial.component.html',
  styleUrls: ['./primordial.component.css']
})
export class PrimordialComponent implements OnInit {

  public contentPrimordialComponent:string = `
  1.先在app.module.ts中引入 import { HttpClientModule } from '@angular/common/http' <br>
  2.然后在 imports: [ <br>
    &nbsp; &nbsp; &nbsp; &nbsp;  BrowserModule, <br>
    &nbsp; &nbsp; &nbsp; &nbsp;  AppRoutingModule, <br>
    &nbsp; &nbsp; &nbsp; &nbsp;  FormsModule, <br>
    &nbsp; &nbsp; &nbsp; &nbsp;  HttpClientModule <br>
  ],中加入 HttpClientModule <br>
  3.再在primordial.component.ts文件中引入import { HttpClient } from '@angular/common/http'; <br>
  4.接在在这个文件中constructor中引入：constructor(public http:HttpClient) { } <br>
  5.然后进行使用 <br>
  `

  constructor(public http:HttpClient) { }

  ngOnInit(): void {

  }

  getData(){

  }

}
