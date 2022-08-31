/*
ViewChild获取dom节点
*/
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom-actions',
  templateUrl: './dom-actions.component.html',
  styleUrls: ['./dom-actions.component.css']
})
export class DomActionsComponent implements OnInit {
  public flag: boolean = true;

  // 获取dom节点
  @ViewChild('myBox') myBox: any;
  @ViewChild('domActionChild') domActionChild: any;


  constructor() { }

  ngOnInit(): void {
    // 组件和指令初始化完成，并不是真正的dom加载完成
    let oBox: any = document.getElementById('box');
    // console.log(`这是domAction中的oBox:${oBox.innerHTML}`);
    oBox.style.color = "red"

    // 获取不到dom节点
    /*
    let oBox1: any = document.getElementById('box1');
    console.log(oBox1.innerHTML);
    oBox.style.color = "blue"
    */
  }

  // 视图加载完成以后触发的方法  dom加载完成  (建议把dom操作放在这个里面)
  // angular中直接操作dom元素

  ngAfterViewInit(): void {
    // 利用原生angular代码进行操作
    let oBox1: any = document.getElementById('box1');
    console.log(`这是domAction中的oBox1:${oBox1.innerHTML}`);
    oBox1.style.color = "blue"

    // 利用ViewChild进行操作
    this.myBox.nativeElement.style.width = '300px'
    this.myBox.nativeElement.style.height = '80px'
    this.myBox.nativeElement.style.background = 'yellow'
  }
  // 调用子组件的方法
  getClick() {
    this.domActionChild.domActions()
  }

  changeFlag() {
    this.flag = !this.flag
  }
}
