import { Component, OnInit, ViewChild } from '@angular/core';
// import { ECharts, init } from "echarts";

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.less']
})
export class WorkplaceComponent implements OnInit {
  // @ViewChild("eps") eps: any;
  constructor() { }
  // epsEcharts!: ECharts;
  ngOnInit(): void {
    // this.fun()
  }
  // ngAfterViewInit(): void {
  //   this.epsEcharts = init(this.eps.nativeElement);
  //   this.epsEcharts.setOption(this.epsEChartsOption);
  // }

  // base = +new Date();
  // oneDay = 5 * 1000;
  // data = [[this.base, Math.random() * 300]];
  // now = new Date();
  // value = Math.random() * 100;
  // fun() {
  //   for (let i = 1; i < 20; i++) {
  //     this.now = new Date((this.base += this.oneDay));
  //     // this.data.push([+this.now, Math.round((Math.random() - 0.5) * 20 + this.data[i - 1][1])]);
  //     this.data.push(this.randomData());
  //   }
  //   setInterval(() => {
  //     this.data.shift();
  //     this.data.push(this.randomData());
  //     this.epsEcharts.setOption({
  //       series: [
  //         {
  //           data: this.data
  //         },
  //       ]
  //     });
  //   }, 5000);
  // }

  // epsEChartsOption = {
  //   tooltip: {
  //     trigger: 'axis',
  //     position: function (pt) {
  //       return [pt[0], '10%'];
  //     },
  //     axisPointer: {
  //       animation: false
  //     }
  //   },
  //   title: {
  //     left: 'center',
  //     text: 'Large Ara Chart'
  //   },
  //   toolbox: {
  //     feature: {
  //       dataZoom: {
  //         yAxisIndex: 'none'
  //       },
  //       restore: {},
  //       saveAsImage: {}
  //     }
  //   },
  //   xAxis: {
  //     type: 'time',
  //     boundaryGap: false,
  //     axisTick: {
  //       alignWithLabel: true
  //     }
  //   },
  //   yAxis: {
  //     type: 'value',
  //     boundaryGap: [0, '100%']
  //   },
  //   dataZoom: [
  //     {
  //       type: 'inside',
  //       start: 0,
  //       end: 50
  //     },
  //   ],
  //   series: [
  //     {
  //       name: 'Fake Data',
  //       type: 'line',
  //       showSymbol: false,
  //       data: this.data
  //     },
  //   ]
  // };

  // randomData() {
  //   this.now = new Date(+this.now + this.oneDay);
  //   this.value = this.value + Math.random() * 20 - 10;
  //   return ([+this.now, this.value])
  // }
}
