<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :default-active="activeMenu"
    :collapse="!$store.getters.sidebarOpened"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :unique-opened="true"
    router
  >
    <SidebarItem v-for="route in routes" :route="route" :key="route.path" />
  </el-menu>
</template>
<script setup>
import SidebarItem from './SidebarItem.vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouter, generateMenus } from '@/utils/route'
import { computed } from 'vue'

const router = useRouter()

// 计算路由表结构, router.getRoutes 可能发生变化
const routes = computed(() => {
  const filterRoutes = filterRouter(router.getRoutes())
  return generateMenus(filterRoutes)
})
const route = useRoute()

const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>
