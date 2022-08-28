import { Component, OnInit, ViewChild } from '@angular/core';
import { ECharts, init } from "echarts";
@Component({
  selector: 'app-echart-liquidfill',
  templateUrl: './echart-liquidfill.component.html',
  styleUrls: ['./echart-liquidfill.component.less']
})
export class EchartLiquidfillComponent implements OnInit {
  @ViewChild("echart") echartdom: any;
  constructor() { }
  echart!: ECharts;
  ngOnInit(): void { }
  res = {
    usedStorage: 66,
    availableStorage: 34
  }

  ngAfterViewInit(): void {
    this.echart = init(this.echartdom.nativeElement);
    this.freshEcharts();
  }

  EChartsOption = {
    tooltip: {
      trigger: "item",
      transitionDuration: 0,
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "磁盘使用情况",
        data: [{ value: 0 }],
        type: "pie",
        radius: ["65%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = ["#dd5146", "#6091ab"];
              return colorList[params.dataIndex];
            },
            label: {
              show: true,
              position: "top",
              // formatter: "{b}\n{c}",
            },
          },
        },
      },
      {
        name: "内存占用",
        // 内环圈
        outline: {
          show: false,
        },
        // 背景样式设置
        // backgroundStyle: {
        //   borderWidth: 5,
        //   borderColor: 'red',
        //   color: 'yellow'
        // },
        radius: "60%",
        type: "liquidFill",
        data: [
          2,
          {
            value: 0.6,
            direction: 'left', //波浪方向
          },
        ],
        amplitude: '15 %', //波浪的振幅
        color: ["#dbc7b5"],
        label: {
          formatter: function (param) {
            return `${param.seriesName}: ${param.value * 100}%`;
          },
          fontSize: 14,
        },
        tooltip: {
          formatter(param) {
            return `${param.seriesName}: ${param.value * 100}%`;
          },
        },
      },
    ],
  };

  freshEcharts() {
    let arr = [];
    arr = [
      {
        value: this.res.usedStorage,
        name: "已用内存",
      },
      {
        value: this.res.availableStorage,
        name: "可用内存",
      },
    ];
    this.EChartsOption.series[0].data = arr;
    let tempDisk = Number((this.res.usedStorage / 100).toFixed(2))
    this.EChartsOption.series[1].data = [tempDisk];
    // this.EChartsOption.series[1].data = [0.4,0.5];//多重波浪
    this.echart.setOption(this.EChartsOption);

  }
}
