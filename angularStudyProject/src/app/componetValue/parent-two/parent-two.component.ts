import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.css']
})
export class ParentTwoComponent implements OnInit {

  @ViewChild('footer') footer: any;

  constructor() { }

  ngOnInit(): void {

  }

  getChildMsg() {
    // 获取footer子组件的数据
    console.log(this.footer.childMsg);
  }

  getChildTake() {
    this.footer.childTake()
  }

}
