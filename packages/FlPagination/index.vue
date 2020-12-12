<template>
  <el-pagination
    v-bind="[$props, $attrs]"
    :current-page="page"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    @prev-click="prevClick"
    @next-click="nextClick">
    <slot/>
  </el-pagination>
</template>

<script>
import { pagination } from 'element-ui';

export default {
  name: 'FlPagination',
  components: {
    ElPagination: pagination,
  },
  props: {
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next',
    },
    align: {
      type: String,
      default: 'right',
    },
    page: Number,
    pageSize: Number,
    total: Number,
  },
  methods: {
    handleSizeChange(val) {
      if (this.page !== 1) {
        this.handleCurrentChange(1);
      } else {
        this.$emit('update:pageSize', val);
        this.$emit('size-change', val);
      }
    },
    handleCurrentChange(val) {
      this.$emit('update:page', val);
      this.$emit('page-change', val);
    },
    prevClick(val) {
      this.$emit('prev-click', val);
    },
    nextClick(val) {
      this.$emit('next-click', val);
    },
  },
};
</script>
