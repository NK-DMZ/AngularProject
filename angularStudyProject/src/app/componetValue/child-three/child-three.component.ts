import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {

  @Output() private outer = new EventEmitter();
  public msChildThree = "这是第三种事件驱动传值的子组件"

  constructor() { }

  ngOnInit(): void {
  }

  fun1(){
    console.log('这是fun1方法');    
  }

  sendParent(){
    // this.outer.emit('这是子组件的数据')
    this.outer.emit(this.msChildThree)
  }

}
