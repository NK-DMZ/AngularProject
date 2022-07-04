import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value))
  }

  // 视频讲的照着写代码会报错
  // get(key:string){    
  //   return JSON.parse(localStorage.getItem(key));
  // }

  get(key:string) {
    let  temp = localStorage.getItem(key)
    let str:string;    
    if(temp){
      str = temp;
    }else{
      str = '[]'
    }
    return JSON.parse(str);
  }

  remove(content:string): void{
    localStorage.removeItem(content)
  }

}
