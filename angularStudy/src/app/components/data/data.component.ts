import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  // 定义属性
  public student: string = "student！";
  public htmlContent: string = "<h2>这是h2标签</h2>";
  public chip: string = '---------------------------------\
-------------------------------------------------------\
---------------------------------------------------------'
  public imgUrl: string = 'https://angular.cn/assets/images/logos/angular/logo-nav@2x.png'


  // 定义数组
  public arr: string[] = [
    '我不是枪神',
    '长津湖',
    '这个杀手不太冷',
    '熊出没',
    '不要忘记我爱你',
  ];
  public person: any[] = [
    { username: '王语嫣', age: 25 },
    { username: '陆家嘴', age: 35 },
    { username: '马云', age: 59 },
    { username: '富途牛', age: 18 },
  ];
  public car: any[] = [
    {
      brand: '宝马',
      series: [
        {
          name: '宝马X3',
          price: 40,
        },
        {
          name: '宝马X5',
          price: 70,
        },
        {
          name: '宝马X6',
          price: 90,
        },
      ]
    },
    {
      brand: '比亚迪',
      series: [
        {
          name: '汉EV',
          price: 22,
        },
        {
          name: '海豚',
          price: 9.6,
        },
      ]
    },
    {
      brand: '路虎',
      series: [
        {
          name: '揽胜极光',
          price: 38.8,
        },
        {
          name: '发现',
          price: 68.9,
        },
        {
          name: '神行者2',
          price: 39.8,
        },
        {
          name: '路虎卫士',
          price: 79.8,
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
