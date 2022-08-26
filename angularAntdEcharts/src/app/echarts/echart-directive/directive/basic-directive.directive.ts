import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef } from '@angular/core';
import { EChartsOption, ECharts, init } from 'echarts';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
@Directive({
  selector: '[appBasicDirective]'
})
export class BasicDirectiveDirective {

  chart: ECharts;
  destroy$ = new Subject();
  simulatedData = [6, 7, 8, 9, 8]

  constructor(
    public http: HttpClient,
    public el: ElementRef
  ) {
  }

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
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.chart.dispose();
  }

  private _assembleOptions(): EChartsOption {
    return {
      title: {
        text: '指令的基本使用'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
  }

}
