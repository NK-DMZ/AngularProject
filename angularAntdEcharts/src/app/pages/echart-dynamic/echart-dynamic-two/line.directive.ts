import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { EChartsOption, ECharts, init } from 'echarts';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

const format = (t: number): string => {
    return t >= 10 ? `${t}` : `0${t}`;
};

const oneMinutes = 1000;
let now: Date | number = +new Date(1997, 9, 3);
let value = Math.random() * 1000;

const randomData = () => {
    now = new Date(+now + oneMinutes);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') +
            ' ' +
            [format(now.getHours()), format(now.getMinutes()), format(now.getSeconds())].join(':'),
            Math.round(value)
        ]
    };
};

@Directive({
    selector: '[appLine]'
})
export class LineDirective implements AfterViewInit, OnDestroy {
    @Input('appLine') dataset = {};
    data = [];
    chart: ECharts;
    destroy$ = new Subject();

    constructor(
        public el: ElementRef
    ) {
        for (let i = 0; i < 1000; i++) {
            this.data.push(randomData());
        }

        this.chart = init(this.el.nativeElement);
    }

    ngAfterViewInit(): void {
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
        setInterval(() => {
            this.data.shift();
            this.data.push(randomData());

            this._setData(this.data);
        }, 1000);
    }

    private _setData(data: any[]): void {
        this.chart.setOption({
            series: [{
                data: data
            }]
        });
    }

    private _assembleOptions(): EChartsOption {
        return {
            title: {
                text: '动态数据 + 时间坐标轴'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                },
                formatter: (params) => {
                    const param = (params)[0] ;
                    const v = param.data.value;

                    return `${v[0]} ${v[1]}`;
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: '模拟数据',
                    type: 'line',
                    showSymbol: false,
                    data: this.data
                }
            ]
        };
    }
}
// 指令需要在module内导入