import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ECharts, init } from "echarts";
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  @Input() res: any;
  @ViewChild("echart") echartdom: any;
  constructor() { }
  echart!: ECharts;
  ngOnInit(): void { }
  ngAfterViewInit(): void {
    this.echart = init(this.echartdom.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    const current = changes.res && changes.res.currentValue;
    if ('availableStorage' in current) {
      this.freshEcharts();
    }
  }

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
    this.echart.setOption(this.EChartsOption);
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
        name: "内存情况",
        data: [
          { value: 0 },
        ],
        type: "pie",
        radius: ["60%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          // label: {
          //   show: true,
          //   fontSize: '40',
          //   fontWeight: 'bold'
          // }
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
              var colorList = ["#F52222", "#55A722", "#1FE6D4"];
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
    ],
  };

}
