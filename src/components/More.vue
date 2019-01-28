<template>
  <div class="more container">
    <!-- 账号 -->
    <h-text class="font-bold font-16 mb-10">账号</h-text>
    <!-- 已登录 -->
    <div class="radiu-box flex-row-between">
      <div class="flex-col-end">
        <h-text class="font-white font-bold font-16 mb-15">186****0920</h-text>
        <h-text class="font-orange">天行健, 君子以自强不息</h-text>
      </div>
      <image src="/src/assets/icons/touxiang.png" resize="cover" class="avatar" />
    </div>
    <!-- 未登录 -->
    <div class="radiu-box flex-row-center p-25">
      <div class="mr-30" @click="jumpLog">
        <h-text class="font-black font-bold font-14 btn-40 bg-blue" style="width:200px">快登陆</h-text>
      </div>
      <div @click="jumpRegister">
        <h-text class="font-black font-bold font-14 btn-40 bg-light-green" style="width:200px">快注册</h-text>
      </div>
    </div>

    <!-- 小工具 -->
    <h-text class="font-bold font-16 mb-10">小工具</h-text>
    <div class="radiu-box flex-row flex-wrap pl-0 pr-0">
      <div class="flex-items-center icons-item"  v-for="(item, index) of tool" :key="index" @click="jumpPage(item.path)">
        <image resize="cover" :src="item.image" class="icon-image" />
        <h-text class="font-white">{{item.title}}</h-text>
      </div>
      
    </div>
    <!-- 持仓数据 -->
    <h-text class="font-bold font-16 mb-10">持仓数据</h-text>
    <div class="radiu-box flex-row flex-wrap pl-0 pr-0">
      <div class="flex-items-center icons-item" v-for="(item, index) of amount" :key="index">
        <image resize="cover" :src="item.image" class="icon-image" />
        <h-text class="font-white">{{item.title}}</h-text>
      </div>
    </div>
    <!-- 更多贵金属数据 -->
    <div class="flex-row-between flex-items-center">
      <h-text class="font-bold font-16 mb-10">更多贵金属行情</h-text>
      <div class="flex-row flex-items-center">
        <image src="/src/assets/icons/change.png" class="mr-5" style="width:30px;height:30px" />
        <h-text class="font-11">换一换</h-text>
      </div>
    </div>
    <div class="radiu-box"></div>
  </div>
</template>
<script>
import HText from '@/common/h-text.vue'
export default {
  components: {HText},
  data () {
    return {
      tool:[
        {image: '/src/assets/icons/service.png', title: '客服', path: '/'},
        {image: '/src/assets/icons/about.png', title: '关于猎豹', path: 'aboutus'},
        {image: '/src/assets/icons/recommend.png', title: '推荐应用', path: '/'},
        {image: '/src/assets/icons/alter.png', title: '修改密码', path: 'changepwd'},
        {image: '/src/assets/icons/account.png', title: '切换账号', path: '/'},
      ],
      amount: [
        {image: '/src/assets/icons/ETF.png', title: 'ETF持仓', path: ''},
        {image: '/src/assets/icons/CFTC.png', title: 'CFTC持仓', path: ''}
      ]
    }
  },
  methods: {
    jumpLog () {
      this.$router.push('log')
    },
    jumpRegister () {
      this.$router.push('register')
    },
    jumpPage (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style src="./base.css"></style>
<style scoped>
.avatar{
  width: 120px;
  height: 120px;
  border-color: #4C5059;
  border-style: solid;
  border-width: 10px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}
.icons-item{
  width: 229px;
}
.icon-image{
  width: 80px;
  height: 80px;
  margin-bottom: 14px;
}
</style>
