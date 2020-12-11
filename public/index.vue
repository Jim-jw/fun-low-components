<template>
  <div>
    <FlSelect
      v-model="value"
      :options="options"/>
    <FlSelect
      v-model="value"
      :options="['1', '2', '3']"/>
  </div>
</template>

<script>
import FlSelect from '../packages/FlSelect/index.vue';

export default {
  components: {
    FlSelect,
  },
  data() {
    return {
      value: '1',
      options: [{
        value: '1',
        name: '测试1',
      }, {
        value: '2',
        name: '测试2',
      }, {
        value: '3',
        name: '测试3',
      }],
    };
  },
};
</script>
<style>
.echarts {
  width: 300px;
  height: 300px;
}
.cell {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
