import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';

import { NzFormModule, } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { Component } from '@angular/core';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [FormRoutingModule, CommonModule,NzFormModule,ReactiveFormsModule,NzInputModule, ],
  exports: [FormComponent]
})
export class FormModule { }