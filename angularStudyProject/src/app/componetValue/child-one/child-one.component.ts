import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  // 接收父组件传过来的值
  @Input() title:any;
  @Input() msg:any;
  @Input() run:any
  @Input() parent_One:any

  constructor() { }

  ngOnInit(): void {
  }
  
  childRun():void{
    this.run();
    console.log('传递home对象进行操作');    
    this.parent_One.work()
  }

}
