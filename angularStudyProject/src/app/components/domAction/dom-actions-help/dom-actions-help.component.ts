import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-actions-help',
  templateUrl: './dom-actions-help.component.html',
  styleUrls: ['./dom-actions-help.component.css']
})
export class DomActionsHelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  domActions(){
    console.log('这是dom操作中的子组件的 domActions 方法');    
  }

}
