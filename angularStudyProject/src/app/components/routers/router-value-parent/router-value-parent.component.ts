import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-value-parent',
  templateUrl: './router-value-parent.component.html',
  styleUrls: ['./router-value-parent.component.css']
})
export class RouterValueParentComponent implements OnInit {
  public list:any[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 0 ; i < 5 ; i++){
      this.list.push(`这是第${i}条数据`)
    }
  }

}
