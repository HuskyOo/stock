var socket = weex.requireModule('webSocket')
var modal = weex.requireModule('modal')
function Socket () {
  console.log(1)
  socket.WebSocket('ws://quote.vs.com:8888','')
  socket.onopen = function (e) {
    console.log('open...')
    modal.toast({message: 'open...'})
  }
  // socket.onopen(()=>{
  //   console.log(e)
  // })
  // socket.onerror = function (e) {
  //   console.log(e.data)
  // }
  // socket.onclose = function (e) {
  //   console.log(e)
  // }
  // socket.onmessage = function (e) {
  //   console.log(e)
  // }
}
export default Socket