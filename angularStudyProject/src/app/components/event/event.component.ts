import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  public eventValue:string = '这是事件数据'
  public keydownValueOne:string = 'keydownValue'
  public keydownValueTwo:any = 'keydownValue'

  constructor() { }

  ngOnInit(): void {  }

  run(){
    alert('事件run方法被触发')
  }

  getData(){
    alert(this.eventValue)
  }

  setData(){
    this.eventValue='数据已经修改'
  }
  
  keydown(){
    this.keydownValueOne='keydownValue进行修改'
  }

  keyupEvent(e:any){
    console.log(e);
    if(e.keyCode == 13){
      console.log('按了一下回车');      
    }else{
      // e.target 获取dom对象
      // 获取对象的值
      console.log(e.target.value);
    }
  }

  changeColor(event:any){
    let dom:any = event.target;
    dom.style.color = 'blue'
  }

}
