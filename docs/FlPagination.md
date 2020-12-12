# FlPagination 组件

- 使用方法
```
<FlPagination :page.sync="page" :pageSize.sync="pageSize" :total="100"/>
```

> 默认显示`total, sizes, prev, pager, next`，居左对齐，使用`.sync`后，翻页和改变显示条目个数，不需要监听对应的`Events`重新赋值
> 因为业务场景常常pageSize改变后需要将page设置会第一页，所以组件做了优化，page不等于1时，切换pageSize会将page设置为1，触发page-change事件，page等于1时，切换pageSize才会触发size-change事件

- 大部分`Attributes`，`Events`同`ElementUI`的[Pagination](https://element.eleme.cn/#/zh-CN/component/pagination)组件

### FlPagination Attributes
| 参数 | 说明 |	类型 | 默认值 |
|:-|:-:|-:|-:|
| page | 当前页数，推荐使用.sync修饰符 | number | - |
| page-size | 每页显示条目个数，推荐使用.sync 修饰符 | number | 10 |
| total	| 总条目数 | number | - |
| align | 对齐位置(left center right) | string | right |
| layout | 组件布局，子组件名用逗号分隔 | string | total, sizes, prev, pager, next |
|||||

> `layout`显示个数选择器的常用`total, sizes, prev, pager, next, jumper`

### FlPagination Events
| 事件名称 | 说明 |	回调参数 |
|:-|:-:|-:|
| page-change | page 改变时会触发 | 	当前页 |
| size-change | pageSize 改变时会触发 | 每页条数 |
||||
