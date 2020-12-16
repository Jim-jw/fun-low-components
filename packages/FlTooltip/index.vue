<template>
  <el-tooltip
    v-bind="$attrs"
    :disabled="textDisabled"
    :content="content ? content : text"
    :placement="placement">
    <slot>
      <div
        @mouseenter="handleCellMouseEnter"
        @mouseleave="handleCellMouseLeave"
        class="fl-tooltip-text">
        {{text}}
      </div>
    </slot>
    <slot name="content" slot="content"></slot>
  </el-tooltip>
</template>

<script>
import { Tooltip } from 'element-ui';

export default {
  name: 'FlTooltip',
  components: {
    ElTooltip: Tooltip,
  },
  props: {
    text: [String, Number, Boolean],
    content: String,
    disabled: Boolean,
    placement: {
      type: String,
      default: 'top',
    },
  },
  data() {
    return {
      textDisabled: false,
    };
  },
  created() {
    if (this.disabled || this.text) {
      this.textDisabled = true;
    }
  },
  methods: {
    handleCellMouseEnter(event) {
      if (this.disabled) {
        return;
      }
      if (event.target.scrollWidth > event.target.clientWidth) {
        this.textDisabled = false;
      }
    },
    handleCellMouseLeave(event) {
      if (this.disabled) {
        return;
      }
      if (event.target.scrollWidth > event.target.clientWidth) {
        this.textDisabled = true;
      }
    },
  },
};
</script>
<style>
.fl-tooltip-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
