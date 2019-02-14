<template>
  <div class="home">
    <div class="container">
      <!-- 标题和时间 -->
      <div class="k-title">
        <h-text>最新金价</h-text>
        <h-text>2018-08-01 11:40:25</h-text>
      </div>
      <!-- 价钱 -->
      <div class="radiu-box k-detail">
        <h-text class="font-green font-15">-2.2</h-text>
        <h-text class="font-green font-24">1243.45</h-text>
        <h-text class="font-green font-15">0.23%</h-text>
      </div>
      <!-- k 线图 -->
      <div class="radiu-box">
        <!-- <div id="my_charts" style="height:600px"></div> -->
      </div>
      <!-- 轮播图 -->
      <div style="height:300px">
        <slider class="slider" interval="3000" auto-play="true" show-indicators>
          <div class="frame" v-for="(img, index) in imageList" :key="index">
            <image class="image" resize="cover" :src="img"></image>
          </div>
        </slider>
      </div>
      
      <!-- 九宫格 -->
      <div class="grid">
        <div class="grid-item">
          <image src="/src/assets/icons/information.png" style="width:80px;height:80px;margin-bottom:20px;" resize="cover"/>
          <h-text>数据</h-text>
        </div>
        <div class="grid-item">
          <image src="/src/assets/icons/information.png" style="width:80px;height:80px;margin-bottom:20px;" resize="cover"/>
          <h-text>数据</h-text>
        </div>
        <div class="grid-item">
          <image src="/src/assets/icons/information.png" style="width:80px;height:80px;margin-bottom:20px;" resize="cover"/>
          <h-text>数据</h-text>
        </div>
        <div class="grid-item">
          <image src="/src/assets/icons/information.png" style="width:80px;height:80px;margin-bottom:20px;" resize="cover"/>
          <h-text>数据</h-text>
        </div>
      </div>
      <!-- 买盘 卖盘 -->
      <div class="radiu-box bid">
        <div class="bid-title">
          <h-text class="font-red font-16">买盘</h-text>
          <h-text class="font-green font-16">卖盘</h-text>
        </div>
        <div class="bid-ratio">
          <div class="bid-buy"></div>
          <div class="bid-ratio-font">
            <h-text class="font-black font-11">75%</h-text>
            <h-text class="font-black font-11">25%</h-text>
          </div>
        </div>
        <h-text>☆可根据买卖盘占比判断市场的多空趋势</h-text>
      </div>
      <!-- 开盘价 昨结价...  详细信息 -->
      <div class="radiu-box futures-detail">
        <div class="futures-item">
          <h-text class="futures-title">开盘价</h-text>
          <h-text class="futures-num font-15 font-white">1241.0</h-text>
        </div>
        <div class="futures-item">
          <h-text class="futures-title">开盘价</h-text>
          <h-text class="futures-num font-15 font-white">1241.0</h-text>
        </div>
        <div class="futures-item">
          <h-text class="futures-title">开盘价</h-text>
          <h-text class="futures-num font-15 font-red">1241.0</h-text>
        </div>
        <div class="futures-item">
          <h-text class="futures-title">开盘价</h-text>
          <h-text class="futures-num font-15 font-green">1241.0</h-text>
        </div>
        <div class="futures-item">
          <h-text class="futures-title">开盘价</h-text>
          <h-text class="futures-num font-15 font-red">1241.0</h-text>
        </div>
        <div class="futures-item">
          <h-text class="futures-title">开盘价</h-text>
          <h-text class="futures-num font-15 font-green">1241.0</h-text>
        </div>
      </div>
      <!-- <a href="ShowCase.js"> -->
        <div @click="jumpShowCase">
      <h-text class="font-white look-more">查看更多详细数据>></h-text>
      </div>
      <!-- </a> -->
      
    </div>
    <!-- 导航栏 -->
    <div class="bg-light-black flex-row-around flex-items-center nav">
      <h-text class="font-14">新闻</h-text>
      <h-text class="font-14">情绪</h-text>
      <h-text class="font-14">发言</h-text>
      <h-text class="font-14">十档</h-text>
      <h-text class="font-14">公告</h-text>
      <h-text class="font-14">简介</h-text>
    </div>

<!-- <h-text>{{scrolltext}}</h-text> -->
    <!-- 新闻 -->
    <scroller class="container nav-box mt-15" v-if="false">
      <!-- 新闻 -->
      <div>
        <div class="radiu-box flex-row-between">
          <div class="news-info flex-col-between">
            <h-text class="font-bold font-white font-18">中国智慧</h-text>
            <h-text>2018-07-16 16:52:38</h-text>
          </div>
          <image src="/src/assets/icons/touxiang.png" resize="cover" style="width:100px;height:100px;"/>
        </div>
      </div>
    </scroller>
    <!-- 情绪 -->
    <scroller class="container nav-box mt-15" v-if="false">
      <!-- 情绪 -->
      <div class="radiu-box">
        <div class="flex-row-between" style="margin-bottom:36px">
          <div class="flex-col-between">
            <h-text class="font-16 font-red">多头</h-text>
            <div>
              <h-text style="margin-bottom:20px">看多</h-text>
              <h-text class="font-15 font-red">68%</h-text>
            </div>
          </div>
          <div></div>
          <div class="flex-col-between">
            <h-text class="font-16 font-green">空头</h-text>
            <div class="flex-items-end">
              <h-text style="margin-bottom:20px">看空</h-text>
              <h-text class="font-15 font-green">32%</h-text>
            </div>
          </div>
        </div>
        <h-text>☆可根据多空头判断市场走势趋势</h-text>
      </div>
    </scroller>
    <!-- 发言 -->
    <scroller class="container nav-box mt-15" @scroll="scrollHandler">
      <!-- 发言 -->
      <div>
        <!-- 最新金价 -->
        <div class="radiu-box flex-row-between">
          <h-text class="font-white font-14">最新金价</h-text>
          <h-text class="font-green font-15">1243.45</h-text>
        </div>
        <!-- 发言框 -->
        <div class="radiu-box bg-gray flex-row-between flex-items-center">
          <input type="text" class="say-input bg-black"/>
          <image resize="cover" src="/src/assets/icons/send.png" style="width:50px;height:50px" />
        </div>
        <!-- 发言列表 -->
        <div class="radiu-box flex-row-between">
          <image resize="cover" src="/src/assets/icons/touxiang.png" class="avatar"></image>
          <div class="say-info">
            <h-text class="font-white font-16 font-bold say-uname">长者</h-text>
            <h-text class="font-white font-14 say-message">我和大佬谈笑风声</h-text>
            <h-text>2018-07-16 18:18:06</h-text>
          </div>
        </div>
        <div class="radiu-box flex-row-between">
          <image resize="cover" src="/src/assets/icons/touxiang.png" class="avatar"></image>
          <div class="say-info">
            <h-text class="font-white font-16 font-bold say-uname">长者</h-text>
            <h-text class="font-white font-14 say-message">我和大佬谈笑风声</h-text>
            <h-text>2018-07-16 18:18:06</h-text>
          </div>
        </div>
        <div class="radiu-box flex-row-between">
          <image resize="cover" src="/src/assets/icons/touxiang.png" class="avatar"></image>
          <div class="say-info">
            <h-text class="font-white font-16 font-bold say-uname">长者</h-text>
            <h-text class="font-white font-14 say-message">我和大佬谈笑风声</h-text>
            <h-text>2018-07-16 18:18:06</h-text>
          </div>
        </div>
      </div>
    </scroller>
    <!-- 十档 -->
    <scroller class="container nav-box mt-15" v-if="false">
      <!-- 十档 -->
      <div>
        <div class="flex-row-between" style="margin-bottom:30px">
          <h-text class="font-16">买五档</h-text>
          <h-text class="font-16">卖五档</h-text>
        </div>
        <div class="flex-row-between">
          <div class="radiu-box flex" style="margin-right:30px">
            <div class="flex-row-between">
              <h-text class="font-green">卖一</h-text>
              <h-text>31201</h-text>
              <h-text>16</h-text>
            </div>
            <div class="flex-row-between">
              <h-text class="font-green">卖二</h-text>
              <h-text>31201</h-text>
              <h-text>16</h-text>
            </div>
            <div class="flex-row-between">
              <h-text class="font-green">卖三</h-text>
              <h-text>31201</h-text>
              <h-text>16</h-text>
            </div>
            <div class="flex-row-between">
              <h-text class="font-green">卖四</h-text>
              <h-text>31201</h-text>
              <h-text>16</h-text>
            </div>
            <div class="flex-row-between">
              <h-text class="font-green">卖五</h-text>
              <h-text>31201</h-text>
              <h-text>16</h-text>
            </div>
          </div>
          <div class="radiu-box flex">
            <div class="flex-row-between">
              <h-text class="font-red">买一</h-text>
              <h-text>31201</h-text>
              <h-text>16</h-text>
            </div>
            <div class="flex-row-between">
              <h-text class="font-red">买二</h-text>
              <h-text>31201</h-text>
              <h-text>16</h-text>
            </div>
            <div class="flex-row-between">
              <h-text class="font-red">买三</h-text>
              <h-text>31201</h-text>
              <h-text>16</h-text>
            </div>
            <div class="flex-row-between">
              <h-text class="font-red">买四</h-text>
              <h-text>31201</h-text>
              <h-text>16</h-text>
            </div>
            <div class="flex-row-between">
              <h-text class="font-red">买五</h-text>
              <h-text>31201</h-text>
              <h-text>16</h-text>
            </div>
          </div>
        </div>
      </div>
    </scroller>
    <!-- 公告 -->
    <scroller class="container nav-box mt-15" v-if="false">
      <!-- 公告 -->
      <div class="radiu-box">
        <h-text class="font-bold font-white font-18" style="margin-bottom: 30px">中国智慧</h-text>
        <h-text>2018-07-16 16:52:38</h-text>
      </div>
    </scroller>
    <!-- 简介 -->
    <scroller class="nav-box" v-if="false">
      <!-- 简介 -->
      <div class="table-row">
        <div class="table-item border row-center col-center">
          <h-text class="font-center">交易品种</h-text>
        </div>
        <div class="table-item border row-center col-center">
          <h-text class="font-center font-15 font-white">CMX黄金</h-text>
        </div>
        <div class="table-item border row-center col-center">
          <h-text class="font-center">交易代码</h-text>
        </div>
        <div class="table-item border row-center col-center">
          <h-text class="font-center font-15 font-white">纽约商品交易所</h-text>
        </div>
      </div>
    </scroller>
    
  </div>
</template>
<script>
var modal = weex.requireModule('modal')
var navigator = weex.requireModule('navigator')
var websocket = weex.requireModule('webSocket')

import HText from '@/common/h-text.vue'
import echarts from 'echarts'
import Socket from '@/query/socket.js'
export default {
  components: {HText},
  data () {
    return {
      imageList: [
        '/src/assets/images/banner1.png',
        '/src/assets/images/banner2.png',
        '/src/assets/images/banner3.png'
      ],
      scrolltext: ''
    }
  },
  mounted () {
    // Socket()
    websocket.WebSocket('ws://echo.websocket.org','');
  },
  methods: {
    jumpShowCase (event) {
      // navigator.push({
      //     url: '/showcase',
      //     animated: "true"
      //   })
      // var arr = weex.config.bundleUrl.split('/')
      // arr.pop()
      // arr.push('showcase.js')
      // var url = arr.join('/')
      // modal.toast({ message: url })
      // navigator.push({
      //   url,
      //   animated: 'true'
      // })
      // modal.toast({ message: 'callback: ' + event })
      // modal.toast({ message: str })
      // router.push({path:'showcase'})
      this.$router.push('showcase')
    },
    scrollHandler (e) {
      var nowCnt = this.eventCnt + 1;
        this.eventCnt = nowCnt;
        this.offsetX = e.contentOffset.x;
        this.offsetY = e.contentOffset.y;
        this.hint = "scroll event count:" + this.eventCnt + " offsetX:" + this.offsetX + " offsetY:" +this.offsetY;
    },
    // draw (id) {
    //   var myChart = echarts.init(document.getElementById(id))
    //   var option = {
    //         tooltip: {
    //             show: true
    //         },
    //         legend: {
    //             data:['销量']
    //         },
    //         xAxis : [
    //             {
    //                 type : 'category',
    //                 data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","男装"]
    //             }
    //         ],
    //         yAxis : [
    //             {
    //                 type : 'value'
    //             }
    //         ],
    //         series : [
    //             {
    //                 "name":"销量",
    //                 "type":"bar",
    //                 "data":[5, 20, 40, 10, 10, 20, 100]
    //             }
    //         ]
    //     };
    //   myChart.setOption(option)
    // }
  }
}
</script>

<style src="./base.css">
</style>

<style scoped>
  /* .home{
    padding: 0 30px;
  } */
  .k-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .k-detail{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin-bottom: 20px; */
    align-items: center;
  }
  .image {
    width: 690px;
    height: 300px;
  }
  .grid{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 30px 0;
  }
  .grid-item{
    align-items: center;
  }
  .bid-title{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .bid-ratio{
    height: 30px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color:#64FF68;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
  }
  .bid-buy{
    background-color: #FF4A80;
    height: 30px;
    width: 472px;
  }
  .bid-ratio-font{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top:0;
    left: 0;
    padding: 0 10px;
    width: 630px;
    /* width: 200px; */
    height: 30px;
  }
  .futures-detail{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .futures-item{
    align-items:center;
    width: 170px;
    margin-bottom: 30px;
  }
  .futures-title{
    margin-bottom:10px;
  }
  .look-more{
    text-align: right;
    margin-bottom: 20px;
  }
  .say-input{
    width: 550px;
    height: 70px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    padding: 0 20px;
    color: #fff;
  }

  /* 新闻 */
  .news-info{

  }
  /* 发言 */
  .say-info{
    /* margin-bottom: 20px; */
    width: 750px
  }
  .say-uname{
    margin-bottom: 20px;
  }
  .say-message{
    margin-bottom: 20px;
  }
  .nav{
    height:80px;
  }
  .nav-box{
    height:620px
  }
</style>