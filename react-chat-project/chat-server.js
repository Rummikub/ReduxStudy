const express=require("express")
const app=express()
const server=require("http").createServer(app)
const port=7777
server.listen(port,()=>{
    console.log("Chat Server On.....")
})
//채팅서버=>socket (WebSocket)
const socketio=require('socket.io')
const io=socketio.listen(server)

//요청
io.on('connection',(socket)=>{
    socket.on('chat_msg',(msg)=>{
        console.log(msg)
        io.emit('chat_msg','msg')  //접속한 모든 유저에 데이터 전송
    })
})