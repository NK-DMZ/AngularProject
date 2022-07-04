import { Component, OnInit } from '@angular/core';

// 引入服务
import { StorageService } from '../../services/storage.service';

/* 
// 可以使用，但不推荐
let storage = new StorageService();
console.log(storage);
*/

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  public keyWord: string = "";
  public todoList: any[] = [];

  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    let todolist = this.storage.get('todolist');
    if (todolist) {
      this.todoList = todolist;
    }
  }

  doAdd(e: any) {    
    if (e.keyCode == 13) {
      if (!this.todoListHasKeyword(this.todoList, this.keyWord)) {
        this.todoList.push({
          title: this.keyWord,
          status: 0,
        });
        this.keyWord = ''
        // 数据可持续化
        this.storage.set('todolist',this.todoList)
      }else{
        alert('数据已经存在！')
      }     
    }
  }
  
  delData(key: number) {
    this.todoList.splice(key, 1)
    this.storage.set('todolist',this.todoList)
  }
  
  // 如果数组里面有keyword返回true 否则返回false
  todoListHasKeyword(todoList: any, keyWord: any): boolean {
    for (let item of todoList) {
      if (item.title == keyWord) {
        return true;
      }
    }
    return false;
  }

  changeData(){
    this.storage.set('todolist',this.todoList)
  }

}


