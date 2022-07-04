import { Component, OnInit } from '@angular/core';
// 引入服务
import { AsynRequestService } from '../../services/asyn-request.service';

@Component({
  selector: 'app-asyn-way',
  templateUrl: './asyn-way.component.html',
  styleUrls: ['./asyn-way.component.css']
})
export class AsynWayComponent implements OnInit {

  constructor(public request: AsynRequestService) { }

  ngOnInit(): void {

  }

  synchronization() {
    // 1. 同步方法
    let data = this.request.getData();
    console.log(data);
  }

  Callback() {
    // 2.callback通过回调方法获取异步数据
    this.request.getCallbackData((data: any) => {
      console.log(data);
    })
  }

  promiseFun() {
    // 3.Promise获取异步数据
    let promiseData = this.request.getPromiseData();
    promiseData.then((data) => {
      console.log(data);
    })
  }

  // 4.rxjs处理异步
  rxjsFun() {
    let rxjdata = this.request.getRxjsData();
    rxjdata.subscribe(data => {
      console.log(data);
    })
  }

  // 5.在rxjs中撤回未执行的操作
  // Promise的创建之后，动作是无法撤回的。Observable不一样，动作可以通过unsbscribe()方法中途撤回，而且 Observable在内部做了智能的处理.
  recall() {
    console.log('rxjs撤回函数执行，不会打印获取的数据');
    let rxjdata = this.request.getRxjsData();
    let recallVar = rxjdata.subscribe(data => {
      console.log(data);
    })
    setTimeout(() => {
      recallVar.unsubscribe();
    }, 1000);
  }

  // 6.rxjs执行多次
  rxjsCount() {
    let rxjscountSum = this.request.getRxjsCount();
    rxjscountSum.subscribe(data =>{
      console.log(data);      
    })
  }



}
