import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-use',
  templateUrl: './data-use.component.html',
  styleUrls: ['./data-use.component.css']
})
export class DataUseComponent implements OnInit {
  // 定义属性
  public student: string = "student!";
  public htmlContent: string = "<h5>这是h5标签</h5>";
  public chip: string = '---------------------------------\
-------------------------------------------------------\
---------------------------------------------------------'
  public imgUrl: string = 'http://bpic.588ku.com/back_pic/03/52/10/03579335225368f.jpg!/fh/300/quality/90/unsharp/true/compress/true'


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
