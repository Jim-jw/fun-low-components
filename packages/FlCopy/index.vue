<template>
  <div
    ref="copy-btn"
    data-clipboard-action="copy"
    :data-clipboard-text="copyContent"
    class="inline-block">
    <slot>
      <el-button type="primary" plain>
        复制
      </el-button>
    </slot>
  </div>
</template>
<script>
import { Button, Message } from 'element-ui';
import Clipboard from 'clipboard';

export default {
  name: 'CopyBtn',
  components: {
    ElButton: Button,
  },
  props: {
    copyContent: {
      type: String,
      default: '',
      required: true,
    },
    successFn: Function,
    errorFn: Function,
  },
  data() {
    return {
      clipboard: null,
    };
  },
  mounted() {
    this.clipboard = new Clipboard(this.$refs['copy-btn']);
    this.clipboard.on('success', this.handleSuccess);
    this.clipboard.on('error', this.handleError);
  },
  methods: {
    handleSuccess() {
      if (this.successFn) {
        this.successFn();
      } else {
        Message.success('复制成功');
      }
    },
    handleError() {
      if (this.errorFn) {
        this.errorFn();
      } else {
        Message.error('复制失败');
      }
    },
  },
  beforeDestroy() {
    this.clipboard.destroy();
  },
};
</script>
<style scoped>
.inline-block {
  display: inline-block;
}
</style>
