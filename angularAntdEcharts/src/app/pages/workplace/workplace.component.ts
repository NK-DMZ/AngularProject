import { Component, OnInit, ViewChild } from '@angular/core';
import { ECharts, init } from "echarts";
interface DataItem {
  name: string;
  value: [string, number];
}
@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.less']
})
export class WorkplaceComponent implements OnInit {
  @ViewChild("eps") eps: any;
  constructor() { }
  epsEcharts!: ECharts;
  ngOnInit(): void {
    this.fun()
  }
  ngAfterViewInit(): void {
    this.epsEcharts = init(this.eps.nativeElement);
    this.epsEcharts.setOption(this.epsEChartsOption);
  }

  base = +new Date();
  oneDay = 5 * 1000;
  data = [[this.base, Math.random() * 300]];
  now = new Date();
  value = Math.random() * 100;
  fun() {
    for (let i = 1; i < 20; i++) {
      this.now = new Date((this.base += this.oneDay));
      // this.data.push([+this.now, Math.round((Math.random() - 0.5) * 20 + this.data[i - 1][1])]);
      this.data.push(this.randomData());
    }
    setInterval(() => {
      this.data.shift();
      this.data.push(this.randomData());
      this.epsEcharts.setOption({
        series: [
          {
            data: this.data
          },
        ]
      });
    }, 5000);
  }

  epsEChartsOption = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      },
      axisPointer: {
        animation: false
      }
    },
    title: {
      left: 'center',
      text: 'Large Ara Chart'
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'time',
      boundaryGap: false,
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 50
      },
    ],
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        showSymbol: false,
        data: this.data
      },
    ]
  };

  randomData() {
    this.now = new Date(+this.now + this.oneDay);
    this.value = this.value + Math.random() * 20 - 10;
    return ([+this.now, this.value])
  }



  // data = [];
  // now = new Date();
  // oneDay = 3600 * 24 * 1000;
  // value = Math.random() * 1000;

  // epsEChartsOption = {
  //   title: {
  //     text: 'Dynamic Data & Time Axis'
  //   },
  //   tooltip: {
  //     trigger: 'axis',
  //     formatter: function (params) {
  //       params = params[0];
  //       var date = new Date(params.name);
  //       return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
  //     },
  //     axisPointer: {
  //       animation: false
  //     }
  //   },
  //   xAxis: {
  //     type: 'time',
  //     splitLine: {
  //       show: false
  //     },
  //     // data: this.timeData
  //   },
  //   yAxis: {
  //     type: 'value',
  //     boundaryGap: [0, '100%'],
  //     splitLine: {
  //       show: false
  //     }
  //   },
  //   series: [
  //     {
  //       name: 'Fake Data',
  //       type: 'line',
  //       showSymbol: false,
  //       data: this.data
  //     }
  //   ]
  // };


  // randomData(): DataItem {
  //   this.now = new Date(+this.now + this.oneDay);
  //   this.value = this.value + Math.random() * 210 - 10;
  //   return {
  //     name: this.now.toString(),
  //     value: [
  //       [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
  //       Math.round(this.value)
  //     ]
  //   };
  // }

  // fun() {
  //   for (let i = 0; i < 100; i++) {
  //     this.data.push(this.randomData());
  //   }
  //   setInterval(() => {
  //     for (var i = 0; i < 10; i++) {
  //       this.data.shift();
  //       this.data.push(this.randomData());
  //     }
  //     this.epsEcharts.setOption({
  //       xAxis: {
  //         type: 'time',
  //         splitLine: {
  //           show: false
  //         },
  //         data: [" "]
  //       },
  //       series: [
  //         {
  //           data: this.data
  //         }
  //       ]
  //     });
  //   }, 3000);
  // }


}
