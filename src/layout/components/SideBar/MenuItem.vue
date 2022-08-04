<template>
  <i v-if="icon.includes('el-icon')" :class="icon" class="sub-el-icon"> </i>
  <SvgIcon v-else :icon="icon" />
  <span>{{ generateRouteTitle(title) }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
import { generateRouteTitle } from '@/utils/i18n'

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
