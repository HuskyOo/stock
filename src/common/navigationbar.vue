<template>
  <!-- <div class="container" style="height: 96px"> -->
    <!-- <div class="demo"> -->
      <!-- <text class="text">配置颜色</text> -->
      <wxc-minibar title="标题"
                   background-color="#303238"
                   text-color="#FFFFFF"
                   right-text="更多"
                   :useDefaultReturn="left"
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                   @wxcMinibarRightButtonClicked="minibarRightButtonClick">
        <image :src="left ? '/src/assets/icons/back.png' : ''" slot="left" style="width:40px;height:40px"></image>
        <text style="font-size: 36px;color: #fff" slot="middle">{{title}}</text>
        <image slot="right"
         :src="right"
         style="height: 40px;width: 40px"></image>
      </wxc-minibar>
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
  import { WxcMinibar } from 'weex-ui';
  const modal = weex.requireModule('modal');

  export default {
    components: { WxcMinibar },
    props: {
      title:{
        type: String,
        default: ''
      },
      left: {
        type: Boolean,
        default: true
      },
      right: {
        type: String,
        default: ''
      }
    },
    methods: {
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
      }
    }
  };
</script>