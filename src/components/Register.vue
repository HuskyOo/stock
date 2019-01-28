<template>
  <div class="register">
    <my-head title="注册"></my-head>
    <div class="pl-15 pr-15">
      <my-input title="手机号:"></my-input>
      <div class="flex-row-between flex-items-start">
        <my-input title="验证码:" :del="false"></my-input>
        <div class="ml-20 flex-row-center flex-items-center verification">
          <h-text class="font-14 font-white">获取验证码</h-text>
        </div>
      </div>
      <my-input title="设置密码:"></my-input>
      <div class="submit-btn">
        <h-text class="font-16 font-bold font-black">提交修改</h-text>
      </div>
      <div class="flex-items-center">
        <h-text class="font-light-green font-15">登录账号</h-text>
      </div>
    </div>
  </div>
</template>

<script>
import HText from '@/common/h-text.vue'
import MyHead from '@/common/navigationbar.vue'
import MyInput from '@/common/h-input.vue'
export default {
  components:{ HText, MyHead, MyInput }
}
</script>

<style src="./base.css"></style>
<style scoped>
.verification{
  height: 80px;
  width: 200px;
  background-color: #3180FF;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
