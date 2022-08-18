import { Component } from '@angular/core';
// const html2canvas = (window as any).html2canvas;
// const jsPDF = (window as any).jsPDF;

import print from './print'
import { exportPdf } from "./printTwo"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularTransPDF';
  down(){
    print('报告','contentAll')   
  }
  downTwo(){
    exportPdf('报告','contentAll')
  }
}
