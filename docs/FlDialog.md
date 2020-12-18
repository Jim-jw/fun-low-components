# FlDialog 组件

- 使用方法
```
<fl-dialog :visible.sync="dialogVisible" title="标题">
    <div>内容</div>
</fl-dialog>
```
> 特色: 基于[ElDialog](https://element.eleme.cn/#/zh-CN/component/dialog)二次封装,默认显示取消确定按钮,点击按钮默认关闭弹窗,弹窗宽度设置可以传入`'mini'、'small'、'medium'、'large'`，统一项目中弹窗宽度样式

### FlDialog Attributes(常用Attributes)
| 参数 | 说明 |	类型 | 默认值 |
|:-|:-:|-:|-:|
| visible | 是否显示 Dialog，支持 .sync 修饰符 | boolean | false |
| width | Dialog 的宽度,可传入'mini'、'small'、'medium'、'large'，也可传入宽度数值 | string | small |
| title | Dialog 的标题，也可通过具名slot(见下表)传入 | string | - |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean | true |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | - |
| custom-class | Dialog 的自定义类名 | string | - |
| showCancel | 是否显示取消按钮(传入slot="footer"则该Attributes无效) | boolean | true |
| showConfirm | 是否显示确认按钮(传入slot="footer"则该Attributes无效) | boolean | true |
| loadingCancel | 取消按钮是否显示loading(传入slot="footer"则该Attributes无效) | boolean | false |
| loadingConfirm | 确认按钮是否显示loading(传入slot="footer"则该Attributes无效) | boolean | false |
| cancelText | 取消按钮显示文字(传入slot="footer"则该Attributes无效) | string | 取消 |
| confirmText | 确认按钮显示(传入slot="footer"则该Attributes无效) | string | 确认 |
| cancelFn | 取消按钮点击事件，不传点击按钮关闭弹窗(传入slot="footer"则该Attributes无效) | function | - |
| confirmFn | 确认按钮点击事件，不传点击按钮关闭弹窗(传入slot="footer"则该Attributes无效) | function | - |
|||||

### FlDialog Slot
| name | 说明 |
|:-|:-:|
| — | Dialog 的内容 |
| title | Dialog 标题区的内容 |
| footer | Dialog 按钮操作区的内容（默认显示取消、确认按钮） |
|||


### FlDialog Events
| 事件名称 | 说明 |	回调参数 |
|:-|:-:|-:|
| open | Dialog 打开的回调 | - |
| opened | Dialog 打开动画结束时的回调 | - |
| close | Dialog 关闭的回调 | - |
| closed | 	Dialog 关闭动画结束时的回调 | - |
||||
