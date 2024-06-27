const net= require('node:net')
const { resolve } = require('node:path')
function findAvaliablePort(desirePort){
    return new Promise((resolve,reject)=>{
        const server= net.createServer()
        server.listen(desirePort,()=>{
            const {port} =server.address()
            server.close(()=>{
                resolve(port)
            })
        })
        server.on('error',(err)=>{
            if (err.code = 'EADDRINUSE'){
                    findAvaliablePort(0).then(port => resolve(port))
            }else{
                reject(err)
            }
        })
    })

}

module.exports  = {findAvaliablePort}