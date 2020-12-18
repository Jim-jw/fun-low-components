# FlCheckbox 多选框组件

- 使用方法

    - 单独使用可以表示两种状态之间的切换
    ```
    <fl-checkbox v-model="checked">备选项</fl-checkbox> // checked 值为 true 或 false
    ```
    - 多选框组
    ```
    <fl-checkbox v-model="checked" :options="[]"></fl-checkbox>
    ```

- 组件内部封装了是否显示全选`canCheckAll`，其他大部分`Attributes`，`Events`同`ElementUI`的[Checkbox](https://element.eleme.cn/#/zh-CN/component/checkbox)组件

### FlCheckbox Attributes
| 参数 | 说明 |	类型 | 默认值 |
|:-|:-:|-:|-:|
| v-model | 绑定值 | string / number / boolean | - |
| options | 下拉数据，会判断数组内是否对象渲染数据 | array | - |
| isButtonCheck | checkbox是否是按钮样式 | boolean | false |
| valueKey | options为对象数组时，选中值的key值 | string | value |
| labelKey | options为对象数组时，文字显示的key值 | string | name |
| canCheckAll | 是否能够全选 | boolean | false |
| checkAllText | 全选按钮显示文字 | string | 全选 |
| checkAllStyle | 全选按钮样式设置 | object | - |
|||||

### FlCheckbox Events
| 事件名称 | 说明 |	回调参数 |
|:-|:-:|-:|
| change | 当绑定值变化时触发的事件 | 更新后的值 |
||||
