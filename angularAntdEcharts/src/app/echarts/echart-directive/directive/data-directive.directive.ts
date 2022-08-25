import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, } from '@angular/core';
import { EChartsOption, ECharts, init } from 'echarts';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appDataDirective]'
})
export class DataDirectiveDirective {
  allStorage = 0
  usedStorage = 0
  avaiStorage = 0
  chart: ECharts;
  destroy$ = new Subject();
  constructor(
    public http: HttpClient,
    public el: ElementRef
  ) {}

  ngAfterViewInit(): void {
    this.chart = init(this.el.nativeElement);
    this.chart.setOption(this._assembleOptions());

    fromEvent(window, 'resize')
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(2000)
      )
      .subscribe(() => {
        this.chart.resize();
      });
    this._requestDate();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.chart.dispose();
  }

  private _requestDate(): void {
    this.http.get('assets/data-directive.json').subscribe((response:any) =>{
      let res = response.data
      this.usedStorage = res.usedStorage
      this.avaiStorage = res.avaiStorage
      this._setData([this.usedStorage, this.avaiStorage,]);
    })
  }

  private _setData(data: any[]): void {
    this.chart.setOption({
      series: [
        {
          data: [
            { value: data[0], name: '已使用内存' },
            { value: data[1], name: '空闲内存' },
          ]
        },
      ]
    });
  }

  private _assembleOptions(): EChartsOption {
    return {
      title: {
        text: '指令内http获取数据'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['60%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            // { value: 1048, name: 'Search Engine' },
            // { value: 735, name: 'Direct' },
            // { value: 580, name: 'Email' },
          ]
        }
      ]
    };
  }

}
