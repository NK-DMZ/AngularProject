import { Component, OnInit, ViewChild } from '@angular/core';
import { ECharts, init } from 'echarts';

@Component({
  selector: 'app-ectarts-test',
  templateUrl: './ectarts-test.component.html',
  styleUrls: ['./ectarts-test.component.less'],
})
export class EctartsTestComponent implements OnInit {
  @ViewChild('echrtsTwo') echrtsTwo: any;
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
  echartsEChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };

  public testObj!: ECharts;
  echartsTwoEcharts!: ECharts;

  constructor() {}

  ngOnInit() {
    this.getOneHtml();
  }
  ngAfterViewInit(): void {
    this.echartsTwoEcharts = init(this.echrtsTwo.nativeElement);
    this.echartsTwoEcharts.setOption(this.echartsEChartsOption);
    // this.freshEcharts()
  }

  getOneHtml() {
    let test: any = document.getElementById('test');
    this.testObj = init(test);
    this.testObj.setOption(this.EChartsOption);
  }

  freshEcharts() {
    let arr = [];
    for (let index = 0; index < 3; index++) {
        arr.push(index);
    }

    this.echartsEChartsOption.series[0].data = arr;
    this.echartsTwoEcharts.setOption(this.echartsEChartsOption);
}
}
