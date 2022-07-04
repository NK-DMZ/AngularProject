import { Component } from "@angular/core";
// 组件=模板+脚本+样式

// 装饰器(Decorator) ———— 用于指定class的用途
@Component({
    template: `
    <div class="asynchronous">
        <p>自定义的组件</p> <br>
    </div>`,
    selector: 'myc01'
})
export class MyComponentOne {
    constructor() {

    }
}


/*
提示:NG中，任何一个组件都必须声明在一个模块中!
自定义组件步骤:
1.创建组件class.Component({
selector: 'myc01';
template: '<h2></h2>'s
}).
export class MyCO1Component{ }

2.在某个模块中注册组件class
@NgModule  ->  declarations中注册

3.使用这些组件
*/