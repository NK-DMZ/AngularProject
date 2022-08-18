import { Component, OnInit, ViewChild } from '@angular/core';
import { ECharts, init } from "echarts";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-echart-dynamic-one',
  templateUrl: './echart-dynamic-one.component.html',
  styleUrls: ['./echart-dynamic-one.component.less']
})
export class EchartDynamicOneComponent implements OnInit {
  // @ViewChild("eps") eps: any;
  // constructor() { }
  // epsEcharts!: ECharts;
  // ngOnInit(): void {
  //   this.fun()
  // }
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

  @ViewChild("eps") eps: any;
  constructor(public http: HttpClient,) { }
  epsEcharts!: ECharts;

  epsInfo = {
    epsState: false,
    epsInfo: {
      max_input: 100,
      avg_input: 0,
      max_parse: 0,
      avg_parse: 0,
      max_es: 0,
      avg_es: 0
    }
  }


  base = +new Date();
  cycle = 5 * 1000;
  dataMaxInput = [];

  ngOnInit() {
    this.fun()
  }

  ngAfterViewInit(): void {
    this.epsEcharts = init(this.eps.nativeElement);
    this.epsEcharts.setOption(this.epsEChartsOption);
  }

  fun() {
    for (let i = 1; i < 20; i++) {
      this.dataMaxInput.push(this.randomData());
    }
    setInterval(() => {
      if (this.dataMaxInput.length < 5) {
        this.dataMaxInput.push(this.randomData());
      } else {
        this.dataMaxInput.shift();
        this.dataMaxInput.push(this.randomData());
      }
      this.epsEcharts.setOption({
        series: [
          {
            data: this.dataMaxInput
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
      },
      splitLine: {
        show: false
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
        data: this.dataMaxInput
      },
    ]
  };

  randomData() {
    let now = new Date();
    let valueMaxInput = this.epsInfo.epsInfo.max_input;
    // console.log(now);
    // console.log(valueMaxInput);  
    return ([now, valueMaxInput])
  }


}
