<template>
  <!-- 子集 menu 菜单 -->
  <el-sub-menu
    :index="route.path"
    v-if="route.children && route.children.length > 0"
  >
    <template #title>
      <MenuItem :icon="route.meta.icon" :title="route.meta.title" />
    </template>
    <!-- 循环渲染 自调用 -->
    <SidebarItem
      v-for="children in route.children"
      :key="children.path"
      :route="children"
    />
  </el-sub-menu>
  <!-- 具体菜单项 -->
  <el-menu-item :index="route.path" v-else>
    <MenuItem :icon="route.meta.icon" :title="route.meta.title" />
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './MenuItem.vue'

defineProps({
  route: {
    type: Object,
    default: () => {}
  }
})
</script>
<style lang="less" scoped></style>
