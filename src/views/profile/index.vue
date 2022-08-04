<template>
  <div class="">{{ $t('msg.route.profile') }}</div>

  <el-pagination
    :page-size="100"
    layout="total, prev, pager, next"
    :total="1000"
  />
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped></style>
