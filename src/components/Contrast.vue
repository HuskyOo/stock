<template>
  <div class="contrast container">
    <!-- 最新金价 -->
    <h-text class="font-14 font-white mt-15 mb-10">最新金价</h-text>
    <!-- 最新金价数据 -->
    <div class="radiu-box flex-row-between flex-items-center">
      <div class="flex-row flex-items-center">
        <h-text class="font-red font-24 mr-15">1243.45</h-text>
        <h-text class="font-red font-15 mr-15">0.23%</h-text>
        <h-text class="font-red font-15 mr-15">+2.2</h-text>
      </div>
      <h-text class="font-white font-15">21637</h-text>
    </div>
    <!-- 更多数据 -->
    <div class="flex-row-end mb-15">
      <h-text class="font-white">更多数据>></h-text>
    </div>
    <!-- k线图 -->
    <div class="radiu-box"></div>
    <h-text class="mb-20">☆提示: 可同时叠加3个品种进行对比</h-text>
    <!-- 选择器 -->
    <h-text class="font-16 mb-10">选择器</h-text>
    <div class="radiu-box mb-20"></div>
    <!-- 已选品种 -->
    <h-text class="font-16 mb-10">已选择品种</h-text>
    <div class="radiu-box"></div>
    <h-text class="mb-20">☆小豹提示 点击查看更多跳转到合约介绍页面</h-text>
    <div class="flex-row-end mb-15">
      <h-text class="font-white">查看更多>></h-text>
    </div>
  </div>
</template>
<script>
import HText from '@/common/h-text.vue'
export default {
  components:{HText}
}
</script>

<style src="./base.css"></style>
<style scoped>

</style>
