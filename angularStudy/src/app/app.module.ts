import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DataComponent } from './components/data/data.component';
import { BooleanComponent } from './components/boolean/boolean.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { EventComponent } from './components/event/event.component';
import { BindDataComponent } from './components/bind-data/bind-data.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DomActionsComponent } from './components/dom-actions/dom-actions.component';
import { DomActionsHelpComponent } from './components/dom-actions-help/dom-actions-help.component';
import { TransitionComponent } from './components/transition/transition.component';

import { ParentOneComponent } from './componetValue/parent-one/parent-one.component';
import { ParentTwoComponent } from './componetValue/parent-two/parent-two.component';
import { ParentThreeComponent } from './componetValue/parent-three/parent-three.component';
import { ChildOneComponent } from './componetValue/child-one/child-one.component';
import { ChildTwoComponent } from './componetValue/child-two/child-two.component';
import { ChildThreeComponent } from './componetValue/child-three/child-three.component';

import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { AsynWayComponent } from './asynchronous/asyn-way/asyn-way.component';
import { NzButtonModule } from 'ng-zorro-antd/button';


// 引入并且配置服务
import { StorageService } from './services/storage.service';
import { ToolsComponent } from './asynchronous/tools/tools.component';
import { PrimordialComponent } from './dataRequest/primordial/primordial.component';
import { MyComponentOne } from './myComponent/myComponentOne';
import { MyComponentTwo } from './myComponent/myComponentTwo';
import { MyComponentThreeComponent } from './myComponent/my-component-three/my-component-three.component';
import { MyComponentFourComponent } from './myComponent/my-component-four/my-component-four.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DataComponent,
    BooleanComponent,
    PipesComponent,
    EventComponent,
    BindDataComponent,
    FormComponent,
    SearchComponent,
    TodoListComponent,
    DomActionsComponent,
    DomActionsHelpComponent,
    TransitionComponent,
    ParentOneComponent,
    ParentTwoComponent,
    ParentThreeComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    LifecycleComponent,
    AsynWayComponent,
    ToolsComponent,
    PrimordialComponent,

    // 自己定义的组件
    MyComponentOne,
    MyComponentTwo,
    MyComponentThreeComponent,
    MyComponentFourComponent,
    CatalogueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,

    NzButtonModule,
    NzTableModule
  ],
  providers: [StorageService, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
