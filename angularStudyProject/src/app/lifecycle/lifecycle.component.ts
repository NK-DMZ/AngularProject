import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  public msgLifecycle = "这是生命周期组件里面的信息！"
  constructor() {
    console.log('构造函数');    
    console.log('------------------');
  }

  ngOnChanges(){
    console.log('ngOnChanges 方法:在输入属性 (input)/输出属性 (output)的绑定值发生变化时调用。');    
  }
  
  ngOnInit(): void {
    console.log('ngOnInit 方法执行：在第一次 ngOnChanges 完成后调用。请求数据一般放在这个里面');    
  }

  ngDoCheck(): void {
    console.log('ngDoCheck 方法执行：检测，并在发生angular无法或不愿意自己检测的变化时做出反应');    
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit 方法执行：当把内容投影进组件之后调用');    
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked 方法执行:每次完成被投景组件内容的变更检测之后调用');    
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit 方法执行 ：初始化完组件视图及其子视图之后调用（ dom操作放在这个里面)');    
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked 方法执行 ：每次做完组件视图和子视图的变更检则之后调用');    
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy 方法执行 ：每次做完组件视图和子视图的变更检则之后调用');    
  }

  changeMsg(){
    this.msgLifecycle = "我们来修改Msg"
  }



}
