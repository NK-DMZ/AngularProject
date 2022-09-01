country-column-chart

<div class="container">
  <div class="app-sub-card">
    <div *ngIf="!loading && dataS.length > 0" class="source-ip">
      <ul>
        <li *ngFor="let item of dataS">
          <a class="country href-text" href="javascript:;" (click)="detailHref(item.ip)">{{filterIpAssets(item.ip) |
            aviodNull}}</a>
        </li>
      </ul>
      <ul>
        <li *ngFor="let item of dataS">
          <span class="country country-specail text-ellipsis" title="{{item.country | aviodNull}}">{{item.country |
            aviodNull}}</span>
        </li>
      </ul>
      <ul>
        <li *ngFor="let item of dataS">
          <img src="{{item.img}}" alt="" style="height: 14px;width:20px;"
            *ngIf="item.country_code && item.country_code.length > 0">
        </li>
      </ul>
      <ul>
        <li *ngFor="let item of dataS">
          <p class="count">
            <!-- {{item.count | aviodNull}} -->
            <span class="percent" [style.width]="item.percent"></span>
          </p>
          <span class="right-count">{{item.count | countTransform | aviodNull}}</span>
        </li>
      </ul>
    </div>
    <app-no-data *ngIf="!loading && dataS.length === 0"></app-no-data>
    <!-- <nz-spin [nzSpinning]="loading" *ngIf="loading"></nz-spin> -->
  </div>
</div>

:host
    height 100%
    width 100%
    display block

.container
    width: 100%
    height: 100%
    display flex
    flex-direction: column

.app-sub-card
    flex: 1

app-no-data
    height 100%

.source-ip
    display flex
    width 100%
    height 100%

ul
    margin-top 5%
    position relative
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:last-child
        width 100%

    li
        display flex
        padding-top 0
        align-items center
        line-height 1
        font-size 16px

        span
            display inline-block

        .country
            width 100%
            text-align right
            margin-right 5px
            min-width 36px
            color rgba(255, 255, 255, 0.85)

        .country-specail
            max-width 50px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap

        .count
            margin-left 12px
            width calc(100% - 62px)
            position relative
            height 6px
            background-color rgba(211, 216, 237, 0.2)
            border-radius 4px

            .percent
                position absolute
                background-image linear-gradient(90deg, #FAC149 0%, #FF6037 100%)
                border-radius 4px
                height 6px
                left 0
                top 0

        .right-count
            width 65px
            padding-left 12px
            color rgba(255,255,255,0.85)

li, ul
    list-style none
    padding 0

.href-text
    color #219eff !important

a
    color #09f
    text-decoration none
    background-color transparent
    outline 0
    cursor pointer
    transition color 0.3s
    -webkit-text-decoration-skip objects

p
    margin-top: 0
    margin-bottom: 0


import { Component, Input, OnInit, SimpleChange } from '@angular/core';

const defalutOption = [
  { name: 'xx', percent: '50%', count: 1 },
  { name: 'xx', percent: '50%', count: 2 },
  { name: 'xx', percent: '50%', count: 3 },
];

@Component({
  selector: 'app-country-column-chart',
  templateUrl: './country-column-chart.component.html',
  styleUrls: ['./country-column-chart.component.styl']
})
export class CountryColumnChartComponent implements OnInit {
  @Input() datas = defalutOption;
  @Input() width;
  @Input() height;

  // 请求加载状态
  @Input() loading = false;
  // 外部总攻击源
  // @Input() title = '';
  // @Input() subtitle;
  // @Input() total;
  // TOP10外联国家数据
  @Input() data = {
    xAxis: {
      label: "count",
      value: [
        { value: 0, show: true },
        { value: 0, show: true },
        { value: 0, show: true },
        { value: 0, show: true },
        { value: 0, show: true },
      ],
    },
    yAxis: {
      label: "value",
      value: [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
      ]
    }
  };
  @Input() dateTime: any = {
    startTime: 1234561235,
    endTime: 1234561235
  };
  @Input() url = `/WebApi/judgeOperation/static/dist/#/route/event/list?begin_time=${this.dateTime.begin_time * 1000}&end_time=${this.dateTime.end_time * 1000}&sip={{sip}}&hit_s_asset=0&hit_d_asset=1`;
  dataS: any = [];
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: {
    [propKey: string]: SimpleChange
  }) {
    this.handleInput();
    this.setCountryImg();
  }

  handleInput() {
    let countData = [];
    let ipData = [];
    let percentData = [];
    let codeData = [];
    let countryData = [];
    if (this.data && this.data.xAxis && this.data.xAxis.value) {
      this.data.xAxis.value.forEach((item: any, index: number) => {
        if (item.show !== false) countData.push(item.value);
      })      
      if (this.data && this.data.yAxis && this.data.yAxis.value) {
        ipData = this.data.yAxis.value[0];
        percentData = this.data.yAxis.value[1];
        codeData = this.data.yAxis.value[2];
        countryData = this.data.yAxis.value[3];
      }
    }
    this.dataS = [];
    countData.forEach((item: any, index: number) => {
      this.dataS.push({
        count: item,
        ip: ipData[index],
        percent: percentData[index],
        country_code: codeData[index],
        country: countryData[index]
      })
    })
  }

  /**
   * 设置国旗的图片地址
   */
  setCountryImg() {
    const imgData = this.dataS.map(item => {
      return {
        ...item,
        img: `assets/flags/png100px/${item.country_code && item.country_code.toLowerCase()}.png`
      };
    });
    this.dataS = [...imgData];
  }

  /**
     * 替换url的指定参数
     * @param {*} url 需要替换的url
     * @param {*} name 参数名称
     * @param {*} value 替换的值
  */
  replaceQueryString(url, name, value) {
    const re = new RegExp(name + '=[^&]*', 'gi');
    return url.replace(re, name + '=' + value);
  }

  detailHref(ip) {
    // const begin_time = this.dateTime.startTime * 1000;
    // const end_time = this.dateTime.endTime * 1000;
    const sip = Array.isArray(ip) ? ip[1] : ip;
    // const hit_s_asset = '0';
    // const hit_d_asset = '1';
    // const referArgs = this.setReferArgs(sip);
    // this.url = this.url.replace("/\{\{[^\}]*\}\}/g", sip);
    // for(var key in referArgs) {
    //   var e = eval('/'+ key +'/g'); 
    //   this.url = this.url.replace(e,referArgs[key]);
    // }
    // this.url;
    //`${this.url}?begin_time=${begin_time}&end_time=${end_time}&sip=${sip}&hit_s_asset=${hit_s_asset}&hit_d_asset=${hit_d_asset}`;
    this.url = this.replaceQueryString(this.url, sip, sip);
    window.open(this.url);
  }

  filterIpAssets(ipArry) {
    return Array.isArray(ipArry) ? `${ipArry[1]}(${ipArry[0]})` : ipArry;
  }

}
