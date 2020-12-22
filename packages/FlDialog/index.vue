<template>
  <el-dialog
    v-bind="$attrs"
    :title="title"
    :visible.sync="dialogVisible"
    :width="width === 'mini' ? '300px' :
      width === 'small' ? '500px' :
      width === 'medium' ? '800px' :
      width === 'large' ? '1200px' : width"
    @open="$emit('open')"
    @opened="$emit('opened')"
    @close="$emit('close')"
    @closed="$emit('closed')">
    <slot name="title" slot="title"></slot>
    <slot></slot>
    <slot name="footer" slot="footer">
      <el-button
        v-if="showCancel"
        :loading="loadingCancel"
        @click="cancel">{{cancelText}}</el-button>
      <el-button
        v-if="showConfirm"
        :loading="loadingConfirm"
        type="primary"
        @click="confirm">{{confirmText}}</el-button>
    </slot>
  </el-dialog>
</template>

<script>
import { Dialog, Button } from 'element-ui';

export default {
  name: 'FlDialog',
  components: {
    ElDialog: Dialog,
    ElButton: Button,
  },
  props: {
    visible: Boolean,
    title: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: 'small', // large | medium | small | mini
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    showConfirm: {
      type: Boolean,
      default: true,
    },
    loadingCancel: {
      type: Boolean,
      default: false,
    },
    loadingConfirm: {
      type: Boolean,
      default: false,
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    confirmText: {
      type: String,
      default: '确定',
    },
    cancelFn: Function,
    confirmFn: Function,
  },
  watch: {
    visible() {
      this.dialogVisible = this.visible;
    },
    dialogVisible() {
      this.$emit('update:visible', this.dialogVisible);
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  created() {
    this.dialogVisible = this.visible;
  },
  methods: {
    cancel() {
      if (this.cancelFn) {
        this.cancelFn();
      } else {
        this.dialogVisible = false;
      }
    },
    confirm() {
      if (this.confirmFn) {
        this.cancelFn();
      } else {
        this.dialogVisible = false;
      }
    },
  },
};
</script>
