import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.css']
})
export class BooleanComponent implements OnInit {
  public flag:boolean = false;
  public orderStatus:number = 1;
  public attrColor:string = "pink";

  public arrlist: string[] = [
    '我不是枪神',
    '长津湖',
    '这个杀手不太冷',
    '熊出没',
    '不要忘记我爱你',
  ];
  public arrColor:any[] = [
    "'red':key == 0",
    "'grey':key == 1",
    "'orange':key == 2",
  ]

  constructor() { }

  ngOnInit(): void { }

}
