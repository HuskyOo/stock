
// var storage = weex.requireModule('storage')
var modal = weex.requireModule('modal')

import Socket from './socket.js'
import { mobileReg, passwordReg } from './test.js'
var stream = weex.requireModule('stream');
var path = 'http://platform-trade.dktai.cn'
// websocket 连接
// function Socket() {
//   socket(wsPath)
// }
function MobileCode ({mobile,type,imageCode}) {
  HttpPost('/loginAndRegister/getSmsCode',{mobile,type,imageCode},res=>{
    console.log(res)
    // modal.toast({message: res})
  })
}
function ImageCode (mobile) {
  HttpGet('/loginAndRegister/getImgCode.html',mobile,res=>{
    console.log(res)
  })
}
// 注册
function Register ({mobile,password,code}) {
  // axios({
  //   method: 'post',
  //   url: path + '/loginAndRegister/register',
  //   data: {mobile,password,code,resource:'嘿嘿'}
  // })
  HttpPost('/loginAndRegister/register',{mobile,password,code,resource:'嘿嘿'},res=>{
    console.log(res)
    // modal.toast({message: res})
    
    // modal.toast({message: 111})
    if(res.data.success){
      // modal.toast({message: res.data.message})
    }
    modal.toast({message: res.data.message})
  })
}
// 登陆
function Log ({mobile, password, clientId}){
  HttpPost('/loginAndRegister/mobileLogin',{mobile, password, clientId:1},res=>{
    console.log(res)
    // modal.toast({message: res})
    if(res.data.success){
      storage.setItem('secret',res.data.data.secret)
      storage.setItem('token',res.data.data.token)
      modal.toast({message: res.data.data.message})
    }
  })
}
function HttpPost (url, param, fun) {
  // var param = JSON.stringify(param)
  modal.toast({message: param})
  var arr = []
  for(var key in param){
    arr.push(`${key}=${param[key]}`)
  }
  var str = arr.join('&')
  stream.fetch({
    method:'POST',
    url: path + url,
    type: 'json',
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body: str
  },res => {
    fun(res)
  })
}
function HttpGet (url, param, fun) {
  var arr = []
  for(var key in param){
    arr.push(`${key}=${param[key]}`)
  }
  var str = arr.join('&')
  url = path + url + '?' + str
  modal.toast({message: url})
  stream.fetch({
    method: 'GET',
    url: url,
    type: 'json'
  }, res => {
    fun(res)
  })
}
export { mobileReg, passwordReg, ImageCode, MobileCode, Register, Log, Socket }