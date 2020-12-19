<template>
  <div ref="echarts" class="fl-echarts">
  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'FlEchart',
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      return: {
        chart: null,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.chart = echarts.init(this.$refs.echarts);
      this.chart.setOption(this.options);
      this.chart.on('click', (params) => {
        this.echartClick(params);
      });
      this.$watch('options', (options) => {
        this.chart.setOption(options, true);
      }, { deep: true });
    });
  },
  methods: {
    echartClick(params) {
      this.$emit('click', params);
    },
  },
};
</script>
<style>
.fl-echarts {
  width: 100%;
  height: 100%;
}
</style>
