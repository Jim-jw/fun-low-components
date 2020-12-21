# FlImage 组件

- 使用方法
```
<fl-image :src="imageSrc"></fl-image>
```

- 大部分功能同`ElementUI`的[Image](https://element.eleme.cn/#/zh-CN/component/image)组件
- 不同点
    1. `fit`默认开启的是`cover`
    2. `lazy`默认是`true`开启懒加载功能
    3. 图片加载失败处理

### FlImage Attributes
| 参数 | 说明 |	类型 | 默认值 |
|:-|:-:|-:|-:|
| errorIconSize | 图片加载失败默认图标大小（字体单位） | string | 16px |
| errorIconColor | 图片加载失败默认图标颜色（颜色单位） | string | #909399 |
|||||

