import { Component, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
const defalutOption = [
  { name: 'xx', percent: '50%', count: 1 },
  { name: 'xx', percent: '50%', count: 2 },
  { name: 'xx', percent: '50%', count: 3 },
];

@Component({
  selector: 'app-echart-analysis',
  templateUrl: './echart-analysis.component.html',
  styleUrls: ['./echart-analysis.component.less']
})
export class EchartAnalysisComponent implements OnInit {
  @Input() datas = defalutOption;
  @Input() data = {
    xAxis: {
      label: "name",
      value: [
        { value: "xx", show: true },
        { value: "xx", show: true },
        { value: "xx", show: true }
      ],
    },
    yAxis: {
      label: "percent",
      value: [
        { value: "50%", show: true },
        { value: "50%", show: true },
        { value: "50%", show: true },
      ],
    },
    zAxis: {
      label: "count",
      value: [
        [1],
        [2],
        [3]
      ]
    }
  };
  @ViewChild('scroller') scroller;
  @ViewChild('parent') parent;
  @Input() width;
  @Input() height;
  timer: any;
  dataS = defalutOption;
  scrolldatas = [...this.dataS];

  constructor() { }

  ngOnInit(): void {
  }

  
  ngOnChanges(changes: {
    [propKey: string]: SimpleChange
  }) {
    this.handleInput();
    this.scrolldatas = [...this.dataS];
    this.timer && clearInterval(this.timer);
    if( this.parent.nativeElement.clientHeight < (this.dataS.length* 32 +20) ){
      this.scroller && (this.scroller.nativeElement.style.height = this.scrolldatas.length * 32 + 'px');
      this.scrollerFn();
    }
  }

  ngOnDestroy() {
    this.timer && clearInterval(this.timer)
  }

  handleInput() {
    this.dataS = [...defalutOption,...this.datas];
    let xaxisData;
    let yaxisData;
    let zaxisData;
    if (this.data && this.data.xAxis && this.data.xAxis.value) {
      const showxIndex: number[] = [];
      const xaxisDataItem = this.data.xAxis.value.filter((item: any, index: number) => {
        if(item.show !== false) showxIndex.push(index);
        return item.show !== false;
      });
      console.log(xaxisDataItem);
      
      xaxisData = xaxisDataItem.map(item => item.value);
      if (this.data && this.data.yAxis && this.data.yAxis.value) {
        const showyIndex: number[] = [];
        const yDataItem = this.data.yAxis.value.filter((item: any, index: number) => {
          if (item.show !== false) showyIndex.push(index);
          return item.show !== false;
        });
        yaxisData = yDataItem.map(item => item.value);
        if (this.data && this.data.zAxis && this.data.zAxis.value) {
          const showzIndex :number[] = [];
          zaxisData = this.data.zAxis.value.map((item: any, index: number) => {
            showzIndex.push(index);
            return item[0];
          });
        };
      }
    }
    this.dataS = [];
    xaxisData.forEach((item,i) => {
      this.dataS.push({
        name: item,
        percent: yaxisData[i],
        count: zaxisData[i]
      })
    });
  }

  scrollerFn() {
    const el = this.scroller.nativeElement;
    let times = 1;
    if (this.timer !== undefined) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      el.scrollTop++;
      const marginBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
      // 如果当前滚动到底10px,追加数据
      if (marginBottom < 10) {
        this.dataS.push(...this.scrolldatas);
        times++;
      }
      // 如果追加10次数以上，重新开始
      if (times > 10) {
        this.dataS = [...this.scrolldatas];
        el.scrollTop = 0;
        times = 1;
      }
    }, 180);
  }


}
