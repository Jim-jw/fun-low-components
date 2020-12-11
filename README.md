# FL-COMPONENTS(Vue2-ElementUI)

## 介绍
- [组件目录](./docs/index.md)
- low-code为中心思想的，大部分组件基于element-ui的二次封装组件库(**FUN-LOW-COMPONENTS**)
- 大量使用了Vue2.4新增的[$attrs](https://cn.vuejs.org/v2/api/#vm-attrs)属性，所以不支持Vue2.4以下版本
- 组件库不会发布到npm，推荐fork到自己的仓库或者clone到公司的内部代码仓库，通过`npm i git+git地址`方式去引用组件库，按需引入该组件库的组件（使用方式如下）
- 该仓库也集成了组件开发环境，欢迎有兴趣的盆友在此基础上开发新的组件（开发方式如下）
- 个人写的小玩意，有大佬看到不足请勿鄙视，接受对组件的优化建议及批评
- 在此也感谢`Vue`、`ElementUI`、`Vue CLI`等优秀开源项目背后付出的人
- **觉得好用好玩别吝啬⭐哦**

### 项目中使用
- 安装组件库
```
npm i git+git地址 -S
```
- 使用组件
```
import FlSelect from 'fl-components/packages/FlSelect';
```

### 开发新组件
- 安装依赖
```
npm i
```

- 创建新组件
```
npm run add <componentName> // 组件名称推荐全小写、小驼峰、大驼峰
```

- 组件开发
进入`./packages`找到刚才创建的组件进行开发

- 组件文档完善
进入`./docs`找到开发的组件对应的.md文档填写使用方法

- 调试
全局安装Vue CLI快速原型开发(Vue Cli)
```
npm install -g @vue/cli @vue/cli-service-global
```
```
npm run dev
```
进入`./public`的`index.vue`引入自己新组件进行调试

- 发布组件

    - 组件提交前运行`npm run lintfix`解决`error warnings`
    - 规范`commit`提交记录（如： `feat: init`）
```
    feat：提交新功能
    fix：修复了bug
    docs：只修改了文档
    style：调整代码格式，未修改代码逻辑（比如修改空格、格式化、缺少分号等）
    refactor：代码重构，既没修复bug也没有添加新功能
    perf：性能优化，提高性能的代码更改
    test：添加或修改代码测试
    chore：对构建流程或辅助工具和依赖库（如文档生成等）的更改
```