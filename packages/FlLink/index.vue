<template>
  <el-link
    v-bind="$attrs"
    :underline="underline"
    :target="target">
    <slot/>
  </el-link>
</template>

<script>
import { Link } from 'element-ui';

export default {
  name: 'FlLink',
  components: {
    ElLink: Link,
  },
  props: {
    underline: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: '_blank',
    },
  },
};
</script>
