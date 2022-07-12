import { Component, OnInit } from '@angular/core';
import { ECharts, init } from 'echarts';

@Component({
  selector: 'app-ectarts-test',
  templateUrl: './ectarts-test.component.html',
  styleUrls: ['./ectarts-test.component.less']
})
export class EctartsTestComponent implements OnInit {
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

  //
  public sensorObj!: ECharts;
  public testObj!: ECharts;

  constructor() { }

  ngOnInit() {
    this.getHtml()  
     
  }

  getHtml(){
    let test:any=document.getElementById('test');    
    this.testObj = init(test);
    this.testObj.setOption(this.EChartsOption);
  }
}
