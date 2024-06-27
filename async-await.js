const {readFile} = require('node:fs/promises')

;(
async()=>{
    console.log("LEYENDO EL PRIMER ARCHIVO")
const text1= await readFile('./text.txt','utf-8')
console.log("primer texto:",text1)
console.log("Hcaer cosas mientras leer")

console.log("LEYENDO EL segundo+ ARCHIVO")
const text2=await readFile('./text2.txt','utf-8')
console.log("segundo texto:",text2)


}

)()

