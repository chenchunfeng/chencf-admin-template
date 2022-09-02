<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { generateRouteTitle, watchSwitchLang } from '@/utils/i18n'
import { isTags } from '@/utils/tags'

const store = useStore()
const route = useRoute()

/**
 * 生成标签标题
 */
const generateTagTitle = (route) => {
  if (route.meta && route.meta.title) {
    return generateRouteTitle(route.meta.title)
  } else {
    // 取路由最后的单词
    const arr = route.path.split('/')
    return arr[arr.length - 1]
  }
}
// 监听路由，保存tags数据
watch(
  route,
  (to, from) => {
    if (!isTags(to)) return
    const { fullPath, meta, name, path, query, params } = to
    store.commit('app/addTagsView', {
      fullPath,
      meta,
      name,
      path,
      query,
      params,
      title: generateTagTitle(to)
    })
  },
  {
    immediate: true
  }
)

/**
 * 国际化 tags
 */
watchSwitchLang(() => {
  const tagsViewList = store.getters.tagsViewList.map((route) => ({
    ...route,
    title: generateTagTitle(route)
  }))

  store.commit('app/replaceTagsViews', tagsViewList)
})
</script>

<style lang="scss" scoped>
.app-main {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
