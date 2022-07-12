# 版本说明
angular   12.1.1
antd      12.1.1
# 创建新的组件
ng g component  pages/news --module=app
## 出现问题
正常创建命令是这样的：
ng g component  pages/home
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

# 项目start
创建项目
ng new angularAntdEcharts 
打开运行项目
ng serve --port 0 --open 
## 使用antd框架
ng add ng-zorro-antd
    -yes
    -yes
    zh_cn
    sidemenu
## 使用table
### 在welcome.module.ts引入并import
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

imports: [WelcomeRoutingModule, NzTableModule,CommonModule],

### 在welcome.component.ts中定义数据
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

### 在welcome.component.html使用
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
    <tr *ngFor="let data of basicTable.data">
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

## 创建welcome模块下的组件
ng g component pages/welcome/products --module=welcome

# 使用echarts
yarn add echarts
## 在所使用的组件中引用
ectarts-test.component.ts文件中
import { ECharts, init } from 'echarts';

## 定义表格对象
public testObj!: ECharts;

## 定义EChartsOption对象
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