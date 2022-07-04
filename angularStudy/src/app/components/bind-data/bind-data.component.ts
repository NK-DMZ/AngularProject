import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-data',
  templateUrl: './bind-data.component.html',
  styleUrls: ['./bind-data.component.css']
})
export class BindDataComponent implements OnInit {
  public str:string = "import { FormsModule } from '@angular/forms';"
  public keywords:string = '这是默认值';

  constructor() { }

  ngOnInit(): void { }

}
