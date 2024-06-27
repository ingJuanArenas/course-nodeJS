const http= require('node:http')
const {findAvaliablePort}=require('./freePort.js')
const desirePort = process.env.PORT ??3000

const server =http.createServer((req,res)=>{

    console.log("request received")
    res.end("Holamundi")
})

findAvaliablePort(desirePort).then (port=>{
    server.listen (port, ()=>{
        console.log("SERVER LISTENING ON PORT ",port)

    })
})

