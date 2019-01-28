<template>
  <div class="log">
    <my-head title="登录"></my-head>
    <div class="pr-15 pl-15">
      <my-input title="手机号:" type="tel" v-model="tel"></my-input>
      <my-input title="密码:" type="password" v-model="pwd"></my-input>
      <div class="submit-btn" @click="handleSubmit">
        <h-text class="font-black font-bold font-15" >登录</h-text>
      </div>
    </div>
    <div class="flex-items-center">
      <h-text class="font-16 font-light-green">注册账号</h-text>
    </div>
  </div>
</template>

<script>
import HText from '@/common/h-text.vue'
import MyInput from '@/common/h-input.vue'
import MyHead from '@/common/navigationbar.vue'

const modal = weex.requireModule('modal');
export default {
  components:{ HText, MyHead, MyInput },
  data () {
    return {
      tel: '',
      pwd: ''
    }
  },
  methods: {
    handleSubmit () {
      // console.log(this.tel)
      modal.toast({'message': this.tel})
    }
  }
}
</script>

<style src="./base.css"></style>
<style scoped>

</style>
