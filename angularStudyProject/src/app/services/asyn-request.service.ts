import { Injectable } from '@angular/core';
// RxJs处理异步：
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsynRequestService {

  constructor() { }

  getData(){
    return "Request中的数据进行获取！"
  }

  // 异步方法通过回调获取返回的值
  getCallbackData(cb:any){
    setTimeout(() => {
      let userName:string = "回调方法";
      (data:any) =>{
        console.log(data);        
      }
      cb(userName);
    }, 3000);
  }
  
  getPromiseData(){
    return new Promise((resolve) =>{
      setTimeout(() => {
        let msg = "Promise函数"
        resolve(msg);        
      }, 3000);
    })
  }

  getRxjsData(){
    return new Observable(observer =>{
      setTimeout(() => {
        let rxjsname = "Rxjs"
        observer.next(rxjsname)
      }, 3000);
    })
  }

  getRxjsCount(){
    let count = 0;
    return new Observable<any>(observable =>{
      setInterval(()=>{
        count ++;
        let msg = 'count连续执行' + count;
        observable.next(msg);
      },1500)
    })
  }

  dealRxjsDataFilter(){
    let count = 0;
    return new Observable<any>(observable =>{
      setInterval(()=>{
        count ++;
        observable.next(count);
      },1500)
    })
  }

}
