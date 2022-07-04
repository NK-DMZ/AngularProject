import { Component, OnInit } from '@angular/core';

// 引入服务
import { StorageService } from '../../services/storage.service';

/* 
// 可以使用，但不推荐
let storage = new StorageService();
console.log(storage);
*/

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public keyWord: string = "";
  public historyLsit: any[] = [];

  constructor(public storage: StorageService) {

  }

  ngOnInit(): void {
    // console.log('页面刷新会触发这个生命周期函数');
    // 数据持久化   
    let searchlist = this.storage.get('searchlist');
    if (searchlist) {
      this.historyLsit = searchlist;
    }
    // 数据持久化   
  }

  doSearch() {
    if (this.historyLsit.indexOf(this.keyWord) == -1) {
      this.historyLsit.push(this.keyWord);
      // 数据持久化   
      this.storage.set('searchlist', this.historyLsit)
      // 数据持久化   
    }
    this.keyWord = "";
    console.log(this.keyWord);
  }
  
  del(key: number) {
    this.historyLsit.splice(key, 1)
    // 数据持久化 
    this.storage.remove('searchlist')
    this.storage.set('searchlist', this.historyLsit)
    // 数据持久化 
  }

}
