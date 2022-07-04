import { Component, OnInit } from '@angular/core';
import { AsynRequestService } from '../../services/asyn-request.service';
import {map,filter} from 'rxjs/operators'

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  constructor(public request: AsynRequestService) {}

  ngOnInit():void {

  }

  dealDataFilter(){
    let rxjscountSumFilter = this.request.dealRxjsDataFilter();
    rxjscountSumFilter.pipe(
      filter((val:number) => val % 2 == 0)
    )
    .subscribe(data =>{
      console.log(data);      
    })
  }

  dealDataMap(){
    let rxjscountSumFilter = this.request.dealRxjsDataFilter();
    rxjscountSumFilter.pipe(
      map((val) =>{
        return val * 6;
      })
    )
    .subscribe(data =>{
      console.log(data);      
    })
  }
  
  dealDataCombination(){
    let rxjscountSumFilter = this.request.dealRxjsDataFilter();
    rxjscountSumFilter.pipe(
      filter((val:number) => val % 2 == 0),
      map((val) =>{
        return val * 6;
      })
    )
    .subscribe(data =>{
      console.log(data);      
    })
  }

}
