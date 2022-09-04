import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public pipesTime:any = new Date();
  public pipesString:string = 'hi,Jack!'
  public pipesMoney:number = 55
  public pipesNum:number = 1505
  public pipesNumOne:number = 505
  public pipesNumTwo:number = 505.946811462
  public pipesNumThree:number = 505.946819462
  public pipesTrans:number = 0.14
  
  constructor() { }

  ngOnInit(): void {
  }

}
