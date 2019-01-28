<template>
  <wxc-tab-bar :tab-titles="tabTitles"
              :tab-styles="tabStyles"
              title-type="icon"
              @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!-- 第一个页面内容-->
    <div class="item-container" :style="contentStyle">
      <my-head title="首页" :left="false"></my-head>
      <scroller :style="{contentStyle}">
        <!-- <loading> -->
          <!-- <text v-for="(item,index) of showList" :key="index" style="color:#fff">首页{{index}}</text> -->
        <!-- </loading> -->
        <!-- <loading></loading> -->
        <home></home>
      </scroller>
      
    </div>

    <!-- 第二个页面内容-->
    <div class="item-container" :style="contentStyle">
      <my-head title="对比" :left="false"></my-head>
      <scroller :style="{contentStyle}">
        <contrast></contrast>
      </scroller>
    </div>

    <!-- 第三个页面内容-->
    <div class="item-container" :style="contentStyle">
      <my-head title="聊天室" :left="false"></my-head>
      <scroller :style="{contentStyle}">
        <chat></chat>
      </scroller>
    </div>

    <!-- 第四个页面内容-->
    <div class="item-container" :style="contentStyle">
      <my-head title="回测" :left="false"></my-head>
      <scroller :style="{contentStyle}">
        <test></test>
      </scroller>
    </div>
    <!-- 第四个页面内容-->
    <div class="item-container" :style="contentStyle">
      <my-head title="更多" :left="false"></my-head>
      <scroller :style="{contentStyle}">
        <more></more>
      </scroller></div>
  </wxc-tab-bar>
</template>

<style scoped>
  .item-container {
    width: 750px;
    background-color: #303238;
    font-size: 60px;
    /* align-items: center;
    justify-content: center; */
  }
</style>
<script>
  import { WxcTabBar, Utils } from 'weex-ui';
  import MyHead from '@/common/navigationbar.vue'
  import Home from '@/components/Home.vue'
  import Contrast from '@/components/Contrast.vue'
  import Chat from '@/components/Chat.vue'
  import Test from '@/components/Test.vue'
  import More from '@/components/MOre.vue'

  // https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js 
  import Config from '@/config'

  export default {
    components: { WxcTabBar, MyHead, Home, Contrast, Chat, Test, More },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles
    }),
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      // 如果页面没有导航栏，可以用下面这个计算高度的方法
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
      var arr = []
      arr.length = 100
      this.showList = arr
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        // console.log(index);
      }
    }
  };
</script>