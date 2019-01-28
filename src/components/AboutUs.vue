<template>
  <div class="aboutus">
    <my-head title="关于我们"></my-head>
    <div class="container">
      <image src="/src/assets/images/banner1.png" resize="cover" style="width:690px;height:300px" />
      <h-text class="font-bold font-16 mt-15 mb-10">关于我们</h-text>
      <div class="radiu-box flex-items-center p-0 pt-40">
        <image src="/src/assets/icons/touxiang.png" class="mb-20" resize="cover" style="width:120px;height:120px" />
        <h-text class="font-20 font-white font-bold mb-5">黄金猎豹</h-text>
        <h-text class="mb-20">1.0.0.0</h-text>
      </div>
      <h-text class="mb-10 font-bold font-16">关于我们</h-text>
      <div class="radiu-box p-0">
        <h-text class="font-14 font-white">黄金啊  全是黄金 好激动 好震撼 好刺激 感觉人生已经到达了高潮 到达了巅峰</h-text>
      </div>
    </div>
  </div>
</template>

<script>
import HText from '@/common/h-text.vue'
import MyHead from '@/common/navigationbar.vue'
export default {
  components:{ HText, MyHead }
}
</script>

<style src="./base.css"></style>
<style scoped>

</style>
