const e = require('node:express')
const ditto = require ('./pokemon/ditto.json')
const app = express();
app.disable('x-powered-by')
const port = process.env.port ?? 3000

app.use(express.json())

//el codigo anterior es lo siguiente:: 
//app.use((req,res,next)=>{
//    if(req.method != 'POST')return next()
//    if (req.headers['Content-type']!='application/json' )return next()
//        //solo llegan post y aplication json
//    let body = ''
//  req.on('data',chunk=>{
       // body=chunk.toString()
  //  })
    ///req.on('end',()=>{
       // const data= JSON.parse(body)
       // data.timestamp=Date.now()
 //         //mutar la req y cambiar el body
   //     req.body=data
     //   next()
//    })
 //       
 // })



app.get('/pokemon/ditto', (req,res)=>{
    res.json(ditto)
})

app.post('/pokemon',(req,res)=>{
  res.status(201).json(req.body)
})
app.use((req,res)=>{
    res.status(404).send('<h1>404</h1>')
})
app.listen(port,()=>{
    console.log("SERVER LISTENING ON PORT: ", port)
})