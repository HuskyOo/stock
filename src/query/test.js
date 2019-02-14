var modal = weex.requireModule('modal')

var mobileTest = /^1[34578]\d{9}$/
var passwordTest = /^\w{6,18}$/
function mobileReg(str) {
  if(!str){
    modal.toast({message: '请输入电话号码'})
    return false
  }
  if(mobileTest.test(str)){
    return true
  }
  modal.toast({message: '请输入正确的电话号码'})
  return false
}
function passwordReg(str) {
  if(!str){
    modal.toast({message: '密码不能为空'})
    return false
  }
  if(passwordTest.test(str)){
    return true
  }
  modal.toast({message:'请输入由数字 字母 下划线组成的6-18位密码'})
  return false
}
export { mobileReg, passwordReg }