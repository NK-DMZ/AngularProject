import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-country-column-chart',
  templateUrl: './country-column-chart.component.html',
  styleUrls: ['./country-column-chart.component.less']
})
export class CountryColumnChartComponent implements OnInit {

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
        { value: 150, show: true },
        { value: 120, show: true },
        { value: 90, show: true },
        { value: 60, show: true },
        { value: 30, show: true },
      ],
    },
    yAxis: {
      label: "value",
      value: [
        ['10.66.38.179', '10.44.26.252', '10.64.200.90', '10.67.16.4', '10.67.28.18'],
        ['50%', '25%', '15%', '6%', '4%'],
        ['gp', 'jp', 'kh', 'no', 'kr'],
        ['法国', '日本', '柬埔寨', '挪威', '韩国']
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
    this.handleInput();
    this.setCountryImg();
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
      console.log(countData);
      if (this.data && this.data.yAxis && this.data.yAxis.value) {
        ipData = this.data.yAxis.value[0];
        percentData = this.data.yAxis.value[1];
        codeData = this.data.yAxis.value[2];
        countryData = this.data.yAxis.value[3];
      }
      console.log(ipData);
      console.log(percentData);
      console.log(codeData);
      console.log(countryData);      
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
    console.log(countData);   
    console.log(this.dataS);
     
  }

  /**
   * 设置国旗的图片地址
   */
  setCountryImg() {
    const imgData = this.dataS.map(item => {
      return {
        ...item,
        img: `../../../../assets/image/flags/png100px/${item.country_code && item.country_code.toLowerCase()}.png`
      };
    });
    this.dataS = [...imgData];
    console.log(this.dataS);    
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
