# FlSelect 选择器组件

- 使用方法
```
<fl-select v-model="selectValue" :options="options"></fl-select>
```

- 大部分`Attributes`，`Events`同`ElementUI`的[Select](https://element.eleme.cn/#/zh-CN/component/select)组件

### FlSelect Attributes
| 参数 | 说明 |	类型 | 默认值 |
|:-|:-:|-:|-:|
| v-model | 绑定值,会判断值是否数组来渲染是否多选 | string / number / array | - |
| options | 下拉数据，会判断数组内是否对象渲染数据 | array | - |
| valueKey | options为对象数组时，下拉value的key值 | string | value |
| labelKey | options为对象数组时，下拉label的key值 | string | name |
|||||


> 组件有默认插槽，下拉样式需要自定义时候，不用传`options`，在组件里面使用`el-option`
> FlSelect默认开启了可清除(clearable)可搜索(filterable)属性
