<template>
  <div class="changepwd">
    <my-head title="修改密码"></my-head>
    <div class="pr-15 pl-15">
      <my-input title="手机号:"></my-input>
      <div class="flex-row-between flex-items-start">
        <my-input title="验证码:" :del="false"></my-input>
        <div class="ml-20 flex-row-center flex-items-center verification">
          <h-text class="font-14 font-white">发送验证码</h-text>
        </div>
      </div>
      <my-input title="新密码:"></my-input>
      <my-input title="确认密码:"></my-input>
      <div class="submit-btn">
        <h-text class="font-16 font-bold font-black">注册</h-text>
      </div>
    </div>
  </div>
</template>

<script>
import HText from '@/common/h-text.vue'
import MyInput from '@/common/h-input.vue'
import MyHead from '@/common/navigationbar.vue'
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
