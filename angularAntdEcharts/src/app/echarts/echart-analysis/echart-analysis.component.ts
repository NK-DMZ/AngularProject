import { Component, OnInit, ViewChild } from '@angular/core';
import { ECharts, init } from 'echarts';
@Component({
  selector: 'app-echart-analysis',
  templateUrl: './echart-analysis.component.html',
  styleUrls: ['./echart-analysis.component.less']
})
export class EchartAnalysisComponent implements OnInit {
  @ViewChild('echrts') echrts: any;
  constructor() { }

  ngOnInit(): void {
  }
    
  echartsEcharts!: ECharts;
  echartsEChartsOption = {
    // xAxis: {
    //   type: 'category',
    //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    // },
    // yAxis: {
    //   type: 'value'
    // },
    // series: [
    //   {
    //     data: [120, 200, 150, 80, 70, 110, 130],
    //     type: 'bar',
    //     showBackground: true,
    //     backgroundStyle: {
    //       color: 'rgba(180, 180, 180, 0.2)'
    //     }
    //   }
    // ]
    theme: 'dark',
    formatValue: 'format',
    // legend: { show: false },
    axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    seriesData: {
      '异常流量': [0, 123, 123, 12344, 22, 123, 45]
    },
    rotate: 0,
    yMinInterval: 1,
    grid: {
      left: '5%',
      bottom: 0
    },
    color: ['#00FFE4'],
    areaStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0, color: 'rgba(0,255,228,1)' // 0% 处的颜色
        }, {
          offset: 1, color: 'rgba(0,255,228,0)' // 100% 处的颜色
        }],
      },
      opacity: 0.3
    },
    yAxisTick: { show: false },
    xAxisTick: { interval: 5 },
  };

  ngAfterViewInit(): void {
    this.echartsEcharts = init(this.echrts.nativeElement);
    this.echartsEcharts.setOption(this.echartsEChartsOption);
  }

}
