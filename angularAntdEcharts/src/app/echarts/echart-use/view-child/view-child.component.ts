import { Component, OnInit, ViewChild } from '@angular/core';
import { ECharts, init } from 'echarts';
@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.less']
})
export class ViewChildComponent implements OnInit {
  @ViewChild('echrts') echrts: any;
  constructor() { }

  ngOnInit(): void {
  }

  echartsEcharts!: ECharts;
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

  ngAfterViewInit(): void {
    this.echartsEcharts = init(this.echrts.nativeElement);
    this.echartsEcharts.setOption(this.echartsEChartsOption);
    // this.freshEcharts()
  }

  freshEcharts() {
    // 修改数据
    let arr = [];
    for (let index = 0; index < 3; index++) {
      arr.push(index);
    }
    // 修改数据

    this.echartsEChartsOption.series[0].data = arr;
    this.echartsEcharts.setOption(this.echartsEChartsOption);
  }

}
