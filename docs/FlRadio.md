# FlRadio 单选框组件

- 使用方法
```
<FlRadio v-model="radio" :options="[1, 2, 3]"/>
```

- 大部分`Attributes`，`Events`同`ElementUI`的[Radio](https://element.eleme.cn/#/zh-CN/component/Radio)组件

### FlRadio Attributes
| 参数 | 说明 |	类型 | 默认值 |
|:-|:-:|-:|-:|
| v-model | 绑定值,会判断值是否数组来渲染是否多选 | string / number / boolean | - |
| options | 下拉数据，会判断数组内是否对象渲染数据 | array | - |
| isButtonRadio | radio是否是按钮样式 | boolean | false |
| valueKey | options为对象数组时，选中值的key值 | string | value |
| labelKey | options为对象数组时，文字显示的key值 | string | name |
|||||

> 如果`options`传递的是对象数据，可以在对象里面添加`disabled`字段控制某个`Radio`是否可点击

### FlRadio Events
| 事件名称 | 说明 |	回调参数 |
|:-|:-:|-:|
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |
||||
