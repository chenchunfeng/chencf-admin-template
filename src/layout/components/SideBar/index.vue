<template>
  <div id="guide-sidebar" class="">
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20161228%2F0e33d3e10c2d47c18ea99f9bef02fb19_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660700436&t=7c039a67b4fd3cb2b68296d6543480cd"
      />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">ccf-admin</h1>
    </div>
    <el-scrollbar>
      <SidebarMenu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
// 请语法
const logoHeight = 44
</script>
<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: v-bind(logoHeight) + 'px';
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
