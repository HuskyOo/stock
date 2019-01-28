/**
 * Created by Tw93 on 2016/11/4.
 */

export default {

  // 正常模式的tab title配置
  tabTitles: [
    {
      title: '首页',
      icon: '/src/assets/icons/home.png',
      activeIcon: '/src/assets/icons/home_active.png'
    },
    {
      title: '对比',
      icon: '/src/assets/icons/contrast.png',
      activeIcon: '/src/assets/icons/contrast_active.png'
    },
    {
      title: '聊天室',
      icon: '/src/assets/icons/chat.png',
      activeIcon: '/src/assets/icons/chat_active.png',
      // badge: 5
    },
    {
      title: '回测',
      icon: '/src/assets/icons/test.png',
      activeIcon: '/src/assets/icons/test_active.png',
      // dot: true
    },
    {
      title: '更多',
      icon: '/src/assets/icons/more.png',
      activeIcon: '/src/assets/icons/more_active.png',
    }
  ],
  tabStyles: {
    bgColor: '#3C3F46',
    titleColor: '#8D8E8F',
    activeTitleColor: '#FFFFFF',
    activeBgColor: '#3C3F46',
    isActiveTitleBold: true,
    iconWidth: 40,
    iconHeight: 40,
    width: 140,
    height: 100,
    fontSize: 22,
    textPaddingLeft: 10,
    textPaddingRight: 10
  },
  // 使用 iconFont 模式的tab title配置
  // tabIconFontTitles: [
  //   {
  //     title: '首页',
  //     codePoint: '\ue623'
  //   },
  //   {
  //     title: '特别推荐',
  //     codePoint: '\ue608'
  //   },
  //   {
  //     title: '消息中心',
  //     codePoint: '\ue752',
  //     badge: 5
  //   },
  //   {
  //     title: '我的主页',
  //     codePoint: '\ue601',
  //     dot: true
  //   }
  // ],
  // tabIconFontStyles: {
  //   bgColor: '#FFFFFF',
  //   titleColor: '#666666',
  //   activeTitleColor: '#3D3D3D',
  //   activeBgColor: '#FFFFFF',
  //   isActiveTitleBold: true,
  //   width: 160,
  //   height: 120,
  //   fontSize: 24,
  //   textPaddingLeft: 10,
  //   textPaddingRight: 10,
  //   iconFontSize: 50,
  //   iconFontMarginBottom: 8,
  //   iconFontColor: '#333333',
  //   activeIconFontColor: 'red',
  //   iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
  // }
}