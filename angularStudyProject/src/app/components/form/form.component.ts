import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public peopleInfo: any = {
    modelName: '',
    sex: '男',
    cityList: ['北京', '上海', '深圳'],
    city: '深圳',
    hobby: [{
        hobbayName: '吃饭',
        checked: false,
      },
      {
        hobbayName:'睡觉',
        checked:false,
      },
      {
        hobbayName:'敲代码',
        checked:true,
      },
    ],
    mark:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit() {
    let domLi: any = document.getElementById('name');
    console.log(domLi.value);
    console.log('-------');
    console.log(this.peopleInfo);
  }

}
