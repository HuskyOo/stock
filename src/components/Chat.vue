<template>
  <div class="chat container">
    <!-- 本期主题视频标题 -->
    <div class="flex-row-between flex-items-end mb-10 mt-15">
      <h-text class="font-14 font-white">本期主题视频</h-text>
      <h-text class="font-11">当前时间: 2018-08-01 11:40:25</h-text>
    </div>
    <!-- 图片 -->
    <div class="mb-10">
      <image src="/src/assets/images/banner1.png" resize="cover" style="width:690px;height:400px"/>
    </div>
    <h-text class="mb-20">☆在人多的时候雀环一下频道可获得更好的使用体验</h-text>
    <!-- 在线人数 -->
    <div class="flex-row-between mb-20">
      <div class="flex-row flex-items-center">
        <image class="mr-5" src="/src/assets/icons/people.png" style="width:40px;height:30px"/>
        <h-text>当前人数: </h-text>
        <h-text class="font-white">2132 </h-text>
        <h-text>人</h-text>
      </div>
      <div class="flex-row flex-items-center">
        <image class="mr-5" src="/src/assets/icons/flower.png" style="width:40px;height:30px"/>
        <h-text>频道鲜花: </h-text>
        <h-text class="font-white">2132 </h-text>
        <h-text>朵</h-text>
      </div>
    </div>
    <!-- 聊天信息列表 -->
    <div class="radiu-box flex-row-between">
      <image resize="cover" src="/src/assets/icons/touxiang.png" class="avatar"></image>
      <div class="flex">
        <h-text class="font-white font-16 font-bold mb-10">长者</h-text>
        <h-text class="font-white font-14 mb-10">我和大佬谈笑风声</h-text>
        <h-text>2018-07-16 18:18:06</h-text>
      </div>
    </div>
    <!-- 发送消息框 -->
    <div class="flex-row-between flex-items-center bg-gray message-box" v-if="false">
      <image src="/src/assets/icons/send_flower.png" class="mr-15" style="width:50px;height:50px"/>
      <input type="text" class="flex message-input">
      <image src="/src/assets/icons/send.png" class="ml-15" style="width:50px;height:50px"/>
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
.message-box{
  position: fixed;
  width: 750px;
  left: 0;
  bottom: 100px;
  box-sizing: border-box;
  padding: 14px 30px;
}
.message-input{
  height:70px;
  background-color:#303238;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  padding-left: 20px; 
}
</style>
