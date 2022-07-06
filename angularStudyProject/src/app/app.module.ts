import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataUseComponent } from './dataDeal/data-use/data-use.component'
import { DomActionsComponent } from './components/domAction/dom-actions/dom-actions.component';
import { DomActionsHelpComponent } from './components/domAction/dom-actions-help/dom-actions-help.component';
import { BindDataComponent } from './dataDeal/bind-data/bind-data.component';
import { PrimordialComponent } from './dataRequest/primordial/primordial.component'
import { HttpClientModule } from '@angular/common/http'
import { BooleanComponent } from './dataDeal/boolean/boolean.component'
import { EventComponent } from './components/event/event.component'
import { FormComponent } from './components/form/form.component'
import { HeaderComponent } from './components/introduce/header/header.component';
import { IntroduceComponent } from './components/introduce/introduce/introduce.component'
import { PipesComponent } from './components/pipes/pipes.component'
import { SearchComponent } from './components/search/search.component'
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { ChildOneComponent } from './componetValue/child-one/child-one.component'
import { ChildTwoComponent } from './componetValue/child-two/child-two.component'
import { ChildThreeComponent } from './componetValue/child-three/child-three.component'
import { ParentOneComponent } from './componetValue/parent-one/parent-one.component'
import { ParentTwoComponent } from './componetValue/parent-two/parent-two.component'
import { ParentThreeComponent } from './componetValue/parent-three/parent-three.component'
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { AsynWayComponent } from './asynchronous/asyn-way/asyn-way.component';
import { ToolsComponent } from './asynchronous/tools/tools.component';
import { HttpserviceService } from './services/httpservice.service';
import { RouteOneComponent } from './components/routers/route-one/route-one.component';
import { RouteTwoComponent } from './components/routers/route-two/route-two.component';
import { RouteThreeComponent } from './components/routers/route-three/route-three.component';
import { RouteUseComponent } from './components/routers/route-use/route-use.component';
import { RouterValueParentComponent } from './components/routers/router-value-parent/router-value-parent.component';
import { RouterValueChildComponent } from './components/routers/router-value-child/router-value-child.component';
import { RouterValueChildDynamicComponent } from './components/routers/router-value-child-dynamic/router-value-child-dynamic.component';
import { RouterValueChildJsComponent } from './components/routers/router-value-child-js/router-value-child-js.component';
import { RouterValueParentJsComponent } from './components/routers/router-value-parent-js/router-value-parent-js.component';
import { NewsComponent } from './components/nestedRoute/news/news.component';
import { ProductsComponent } from './components/nestedRoute/products/products.component';
import { ProductoneComponent } from './components/nestedRoute/productone/productone.component';
import { ProducttwoComponent } from './components/nestedRoute/producttwo/producttwo.component';
import { NewoneComponent } from './components/nestedRoute/newone/newone.component';
import { NewtwoComponent } from './components/nestedRoute/newtwo/newtwo.component';
import { NestedRouteComponent } from './components/nestedRoute/nested-route/nested-route.component';

@NgModule({
  declarations: [
    AppComponent,
    DataUseComponent,
    BindDataComponent,
    DomActionsComponent,
    DomActionsHelpComponent,
    PrimordialComponent,
    BooleanComponent,
    EventComponent,
    FormComponent,
    HeaderComponent,
    IntroduceComponent,
    PipesComponent,
    SearchComponent,
    TodoListComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    ParentOneComponent,
    ParentTwoComponent,
    ParentThreeComponent,
    LifecycleComponent,
    AsynWayComponent,
    ToolsComponent,
    RouteOneComponent,
    RouteTwoComponent,
    RouteThreeComponent,
    RouteUseComponent,
    RouterValueParentComponent,
    RouterValueChildComponent,
    RouterValueChildDynamicComponent,
    RouterValueChildJsComponent,
    RouterValueParentJsComponent,
    NewsComponent,
    ProductsComponent,
    ProductoneComponent,
    ProducttwoComponent,
    NewoneComponent,
    NewtwoComponent,
    NestedRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
