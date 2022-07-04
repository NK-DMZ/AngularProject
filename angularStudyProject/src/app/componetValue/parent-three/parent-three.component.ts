import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-three',
  templateUrl: './parent-three.component.html',
  styleUrls: ['./parent-three.component.css']
})
export class ParentThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  funChild(e:any){
    // 子组件给父组件广播的数据
    console.log(e);
    console.log('这是父组件中的方法，e是子组件广播给父组件的数据');       
  }

}
