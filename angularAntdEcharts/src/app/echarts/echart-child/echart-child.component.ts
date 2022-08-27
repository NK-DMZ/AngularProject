import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-echart-child',
  templateUrl: './echart-child.component.html',
  styleUrls: ['./echart-child.component.less']
})
export class EchartChildComponent implements OnInit {

  constructor(public http: HttpClient,) { }

  ngOnInit(): void {
    this.getData()
  }

  res: any ={
    usedStorage:0,
  }

  getData() {
    this.http.get('assets/data-directive.json').subscribe((response: any) => {
      this.res = response.data
    })
  }
}
