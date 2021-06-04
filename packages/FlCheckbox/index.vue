<template>
  <component
    v-if="!Array.isArray(value)"
    v-bind="$attrs"
    :is="isButtonCheck ? 'ELCheckboxButton' : 'ElCheckbox'"
    :value="value"
    @change="change"
    v-on="$listeners"
  >
    <slot/>
  </component>
  <div v-else>
    <el-checkbox
      v-if="canCheckAll"
      v-model="checkAll"
      v-bind="$attrs"
      :indeterminate="isIndeterminate"
      :style="checkAllStyle"
      @change="handleCheckAllChange">
      {{checkAllText}}
    </el-checkbox>
    <el-checkbox-group
      v-model="checked"
      v-bind="$attrs"
      @change="change">
      <template v-for="(item, index) in options">
        <component
          v-if="typeof(item) === 'object'"
          v-bind="item"
          :key="index"
          :label="item[valueKey]"
          :is="isButtonCheck ? 'ELCheckboxButton' : 'ElCheckbox'">
          {{item[labelKey]}}
        </component>
        <component
          v-else
          :is="isButtonCheck ? 'ELCheckboxButton' : 'ElCheckbox'"
          :key="item + index"
          :label="item">
        </component>
      </template>
      <slot/>
    </el-checkbox-group>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, CheckboxButton } from 'element-ui';

export default {
  name: 'FlCheckbox',
  components: {
    ElCheckbox: Checkbox,
    ELCheckboxButton: CheckboxButton,
    ElCheckboxGroup: CheckboxGroup,
  },
  props: {
    value: [String, Number, Boolean, Array],
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
    isButtonCheck: {
      type: Boolean,
      default: false,
    },
    canCheckAll: {
      type: Boolean,
      default: false,
    },
    checkAllText: {
      type: String,
      default: '全选',
    },
    checkAllStyle: Object,
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
          this.allCheckStatus(this.value);
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      checked: [],
      checkAll: false,
      isIndeterminate: false,
    };
  },
  created() {
    this.allCheckStatus(this.value);
  },
  methods: {
    change(value) {
      this.$emit('change-value', value);
      this.$emit('change', value);
      this.allCheckStatus(value);
    },
    handleCheckAllChange(val) {
      const checked = [];
      this.options.forEach((item) => {
        if (typeof (item) === 'object') {
          checked.push(item[this.valueKey]);
        } else {
          checked.push(item);
        }
      });
      this.checked = val ? checked : [];
      this.$emit('change-value', val ? checked : []);
      this.$emit('change', val ? checked : []);
      this.isIndeterminate = false;
    },
    allCheckStatus(value) {
      if (this.canCheckAll) {
        const checkedCount = value.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length;
        this.checkAll = checkedCount === this.options.length;
      }
    },
  },
};
</script>
