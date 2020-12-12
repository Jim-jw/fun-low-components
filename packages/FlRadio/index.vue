<template>
  <el-radio-group
    v-bind="$attrs"
    v-model="checked"
    @change="change">
    <template v-for="(item, index) in options">
      <component
        v-if="typeof(item) === 'object'"
        v-bind="item"
        :key="index"
        :label="item[valueKey]"
        :is="isButtonRadio ? 'ElRadioButton' : 'ElRadio'">
        {{item[labelKey]}}
      </component>
      <component
        v-else
        :is="isButtonRadio ? 'ElRadioButton' : 'ElRadio'"
        :key="item + index"
        :value="value"
        :label="item">
      </component>
    </template>
    <slot></slot>
  </el-radio-group>
</template>

<script>
import { RadioGroup, Radio, RadioButton } from 'element-ui';

export default {
  name: 'FlRadio',
  components: {
    ElRadioGroup: RadioGroup,
    ElRadio: Radio,
    ElRadioButton: RadioButton,
  },
  props: {
    value: [String, Number, Boolean],
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
    isButtonRadio: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'value',
    event: 'change-value',
  },
  watch: {
    value: {
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.checked = newValue;
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      checked: null,
    };
  },
  methods: {
    change(value) {
      this.$emit('change', value);
      this.$emit('change-value', value);
    },
  },
};
</script>
