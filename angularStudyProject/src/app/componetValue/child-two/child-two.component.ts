import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  public childMsg:string = "这是子组件footer的内容"

  constructor() { }

  ngOnInit(): void {
  }

  childTake(){
    console.log('这是子组件footer的childTake方法');    
  }
}
