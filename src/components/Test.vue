<template>
  <div class="test container">
    <h-text class="font-16 font-bold mb-10">选择的合约</h-text>
    <div class="radiu-box">
      <h-text class="font-15">美黄金</h-text>
    </div>
    <h-text class="font-16 font-bold mb-10">选择回测的时间</h-text>
    <div class="radiu-box">
      <h-text class="font-15">美黄金</h-text>
    </div>
    <h-text class="font-16 font-bold mb-10">选择回测的K线</h-text>
    <div class="radiu-box">
      <h-text class="font-15">美黄金</h-text>
    </div>
    <h-text class="font-16 font-bold mb-10">选择使用的策略</h-text>
    <div class="radiu-box flex-row-between">
      <div class="flex-col-between">
        <h-text class="font-white font-bold font-16">均线入门策略</h-text>
        <h-text>高效简单的策略, 特点是能够长期穿越牛熊</h-text>
      </div>
      <image src="/src/assets/icons/touxiang.png" resize="cover" style="width:100px;height:100px" />
    </div>
  </div>
</template>
<script>
import HText from '@/common/h-text.vue'
export default {
  components: {HText}
}
</script>

<style src="./base.css"></style>
<style scoped>

</style>
