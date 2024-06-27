const http= require('node:http')
const fs= require ('node:fs')
const desirePort = process.env.PORT ??3000
const processRequest = (req,res)=>{
    res.setHeader('Content-type','text/html;charset-utf-8')

    if (req.url == '/'){
        res.end("<h1>Bienvenido a la pagina de inicio</h1>")
    }else if(req.url ==  './imagen-bonita.png'){
        fs.readFile('./p2.png',(err,data)=>{
            if (err){
            res.statusCode=500
            res.end(<h1>500 internal server error</h1>)
            }else{
                res.setHeader('Content-type','image/png')
                res.end(data)
            }
        })
    }
    else if(req.url == '/contacto'){
        res.end("<h1>Bienvenido a la pagina de contacto</h1>")
    }else{
        res.statusCode = 404
        res.end("<h1>Servidor no encontrado</h1>")
    }
    
}
const server =http.createServer(processRequest)


    server.listen (desirePort, ()=>{
        console.log("SERVER LISTENING ON PORT ",desirePort)

    })





