# 参考文档
官方文档：https://d3js.org/
https://www.imangodoc.com/category/167/1

# d3.selectAll() 
D3.js 中的d3.selectAll()函数用于选择与指定选择器字符串匹配的所有元素。
参数:此函数接受单个参数HTML标记作为参数。
返回值:此函数返回选定的元素。

# d3.scaleLinear() 线性比例尺
https://www.jianshu.com/p/fa11491c8e13
使用d3.scaleLinear()创造一个线性比例尺，而domain()是输入域，range()是输出域，相当于将domain中的数据集映射到range的数据集中。
let scale = d3.scaleLinear().domain([1,5]).range([0,100])
d3.scaleBand()并不是一个连续性的比例尺，domain()中使用一个数组，不过range()需要是一个连续域。
d3.scaleBand()只针对domain()中的数据集映射相应的值。

## api中文使用手册
https://github.com/d3/d3/wiki/API--中文手册