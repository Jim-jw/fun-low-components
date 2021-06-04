<template>
  <el-image
    v-bind="[$props, $attrs]"
    v-on="$listeners">
    <slot name="error">
      <div slot="error" class="fl-image-error-slot">
        <i
          class="el-icon-picture-outline"
          :style="{fontSize: errorIconSize, color: errorIconColor}"></i>
      </div>
    </slot>
    <template slot="placeholder">
      <slot name="placeholder"></slot>
    </template>
  </el-image>
</template>

<script>
import { Image } from 'element-ui';

export default {
  name: 'FlImage',
  components: {
    ElImage: Image,
  },
  props: {
    fit: {
      type: String,
      default: 'cover',
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    errorIconSize: {
      type: String,
      default: '16px',
    },
    errorIconColor: {
      type: String,
      default: '#909399',
    },
  },
};
</script>
<style>
.fl-image-error-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
