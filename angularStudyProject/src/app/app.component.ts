import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularStudyProject';
  lifeCycleBoolean = true;
  changeLifeCycleBoolean(){
    this.lifeCycleBoolean = !this.lifeCycleBoolean;
    console.log('已经禁用或启用生命周期函数组件');    
  }
}
