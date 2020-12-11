/**
 * pages模版快速生成脚本,执行命令 npm run tep `文件名`
 */
const fs = require('fs');

const dirName = process.argv[2];

if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run add test');
  process.exit(0);
}

const formatName = dirName.startsWith('Fl') ? dirName :
                    dirName.startsWith('fl') ? dirName.replace(dirName[0], dirName[0].toUpperCase()) :
                    `Fl${dirName.replace(dirName[0], dirName[0].toUpperCase())}`;

// 页面模版
const indexTep = `<template>
  <div>

  </div>
</template>

<script>
// import {  } from 'element-ui'
export default {
  name: '${formatName}',
  components: {

  },
  props: {},
  created() {

  },
  mounted() {

  },
  methods: {

  },
}
</script>
`;
const mdTep = `# ${formatName} 组件

- 使用方法
${'```'}
${'```'}

### ${formatName} Attributes
| 参数 | 说明 |	类型 | 默认值 |
|:-|:-:|-:|-:|
|  |  |  |  |
|||||

### ${formatName} Events
| 事件名称 | 说明 |	回调参数 |
|:-|:-:|-:|
|  |  |  |
||||
`

process.chdir(`./docs`);
fs.writeFileSync(`${formatName}.md`, mdTep);

fs.mkdirSync(`../packages/${formatName}`); // mkdir $1
process.chdir(`../packages/${formatName}`); // cd $1

fs.writeFileSync('index.vue', indexTep);

console.log(`模版${formatName}已创建,show ur fl-components`);

process.exit(0);
