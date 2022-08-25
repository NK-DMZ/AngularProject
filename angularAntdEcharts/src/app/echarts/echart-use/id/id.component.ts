import { Component, OnInit } from '@angular/core';
import { ECharts, init } from 'echarts';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.less']
})
export class IdComponent implements OnInit {
  public echartsObj!: ECharts;
  EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
    this.getHtml()
  }

  getHtml() {
    let test: any = document.getElementById('id');
    this.echartsObj = init(test);
    this.echartsObj.setOption(this.EChartsOption);
  }

}
