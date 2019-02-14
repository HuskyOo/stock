<template>
  <div class="wrapper">
    <!-- <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text> -->
    <!-- <keep-alive> -->
      <router-view/>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import { Socket } from '@/query/index.js'
var websocket = weex.requireModule('webSocket')
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  mounted () {
    // Socket()
    // websocket.WebSocket('ws://echo.websocket.org','');
  }
}
</script>

<style>
.wrapper{
  background-color: #303238;
}
</style>