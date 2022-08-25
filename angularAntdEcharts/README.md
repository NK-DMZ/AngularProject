# 版本说明

angular 12.1.1
antd 12.1.1

# 创建新的组件

ng g component pages/news --module=app

## 出现问题

正常创建命令是这样的：
ng g component pages/home
但是会报错:
More than one module matches. Use the skip-import option to skip importing the component into the closest module or use the module option to specify a module.

# 创建新的文件

## Component(组件):

npm run ng g component ./core/my-new-component

## Directive(指令):

npm run ng g directive ./core/my-new-directive

## Pipe(管道):

npm run ng g pipe ./core/my-new-pipe

## Service(服务):

npm run ng g service ./core/my-new-service

## Class(类):

npm run ng g class ./core/my-new-class

## Interface(接口):

npm run ng g interface ./core/my-new-interface

## Enum(枚举):

npm run ng g enum ./core/my-new-enum

## Module(模块):

npm run ng g module ./core/my-module

# 项目 start

创建项目
ng new angularAntdEcharts
打开运行项目
ng serve --port 0 --open

# 使用 antd 框架

ng add ng-zorro-antd
-yes
-yes
zh_cn
sidemenu

## 使用 table

### 在 welcome.module.ts 引入并 import

import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

imports: [WelcomeRoutingModule, NzTableModule,CommonModule],

### 在 welcome.component.ts 中定义数据

interface Person {
key: string;
name: string;
age: number;
address: string;
}

listOfData: Person[] = [
{
key: '1',
name: 'John Brown',
age: 32,
address: 'New York No. 1 Lake Park',
},
{
key: '2',
name: 'Jim Green',
age: 42,
address: 'London No. 1 Lake Park',
},
{
key: '3',
name: 'Joe Black',
age: 32,
address: 'Sidney No. 1 Lake Park',
},
];

### 在 welcome.component.html 使用

<nz-table #basicTable [nzData]="listOfData">

<thead>
<tr>
<th>Name</th>
<th>Age</th>
<th>Address</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr \*ngFor="let data of basicTable.data">
<td>{{ data.name }}</td>
<td>{{ data.age }}</td>
<td>{{ data.address }}</td>
<td>
<a>Action 一 {{ data.name }}</a>
<a>Delete</a>
</td>
</tr>
</tbody>
</nz-table>

## 创建 welcome 模块下的组件

ng g component pages/welcome/products --module=welcome

# 使用 echarts

yarn add echarts

## 在所使用的组件中引用

ectarts-test.component.ts 文件中
import { ECharts, init } from 'echarts';

## 定义表格对象

public testObj!: ECharts;

## 定义 EChartsOption 对象

EChartsOption = {
xAxis: {
type: 'category',
data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
},
yAxis: {
type: 'value',
},
series: [
{
data: [820, 932, 901, 934, 1290, 1330, 1320],
type: 'line',
smooth: true,
},
],
};

## 函数使用

<!-- 获取元素 -->

let test:any=document.getElementById('test');

<!-- 初始化表格对象 -->

this.testObj = init(test);

<!-- 设置表格数据信息 -->

this.testObj.setOption(this.EChartsOption);

# 创建新的路由和页面

## 1.在 app.component.html 文件创建新的 ul

<li nz-menu-item nzMatchRouter>
  <a routerLink="/echartsuse">echarts基本使用</a>
</li>

## 2.创建新的组件

先创建模块
ng g module pages/echartUse
再创建组件
ng g component pages/echart-use --module=app

## 3.app-routing.module.ts 文件路由引入

{ path: 'echartsuse', loadChildren: () => import('./pages/echart-use/echart-use.module').then(m => m.EchartUseModule) },

## 4.创建模块路由 echart-use-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EchartUseComponent } from './echart-use.component';

const routes: Routes = [
{ path: '', component: EchartUseComponent },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class EchartDynamicRoutingModule { }

## 5.在模块 module 文件进行引入路由和组件

echart-use.module.ts 引入
import { EchartUseComponent } from './pages/echart-use/echart-use.component';
import { EchartUseComponent } from './echart-use.component';
@NgModule({
imports: [
CommonModule,
EchartUseRoutingModule
],
declarations: [
EchartUseComponent,
ViewChildComponent,
IdComponent,
],
})

## 6.创建子模块

ng g component pages/echart-use/viewChild --module=echart-use

## 7.在父组件使用

## 注意：

如果模块冲突，删除 AppModule 主模块下的组件引用

# 修改启动端口

默认启动 4200，在 package.json 的"start": "ng serve --open --port 4000"进行指定

# vscode 插件

## Turbo Console Log

快捷添加 console.log，一键 注释 / 启用 / 删除 所有 console.log。
ctrl + alt + l 选中变量之后，使用这个快捷键生成 console.log
alt + shift + c 注释所有 console.log
alt + shift + u 启用所有 console.log
alt + shift + d 删除所有 console.log

# 快速定位文档末尾
