<template>
  <el-select
    v-bind="[$props, $attrs]"
    :multiple="multiple"
    @change="change"
    v-on="$listeners">
    <slot></slot>
    <template v-for="(item, index) in options">
      <template v-if="isObject(item)">
        <el-option
          :label="item"
          :value="item"
          :key="item"></el-option>
      </template>
      <template v-else>
        <el-option
          v-bind="item"
          :label="item[labelKey]"
          :value="item[valueKey]"
          :key="index"></el-option>
      </template>
    </template>
  </el-select>
</template>

<script>
import { Select, Option } from 'element-ui';

export default {
  name: 'FlSelect',
  components: {
    ElSelect: Select,
    ElOption: Option,
  },
  props: {
    value: [String, Number, Array],
    options: {
      type: Array,
      default: () => [],
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    labelKey: {
      type: String,
      default: 'name',
    },
    filterable: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    collapseTags: {
      type: Boolean,
      default: true,
    },
  },
  model: {
    prop: 'value',
    event: 'change-value',
  },
  data() {
    return {
      multiple: false,
    };
  },
  created() {
    this.multiple = Array.isArray(this.value);
  },
  methods: {
    change(value) {
      this.$emit('change-value', value);
      this.$emit('change', value);
    },
    isObject(item) {
      return item && typeof (item) !== 'object';
    },
  },
};
</script>
