import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit {
  public title:string = "首页组件的标题"
  public msg:string = "我是父组件的msg"

  constructor() { }

  ngOnInit(): void {
  }


  run():void{
    console.log('父组件的run方法');    
  }
  work():void{
    console.log('父组件的work方法');    
  }

}
