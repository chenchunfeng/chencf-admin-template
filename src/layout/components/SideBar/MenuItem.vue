<template>
  <i v-if="icon.includes('el-icon')" :class="icon" class="sub-el-icon"> </i>
  <SvgIcon v-else :icon="icon" />
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>
<style lang="less" scoped></style>
