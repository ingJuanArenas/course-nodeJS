const fs= require('node:fs/promises')

console.log("LEYENDO EL PRIMER ARCHIVO")
fs.readFile('./text.txt','utf-8')
    .then(text =>{
            console.log("primer texto:",text)
    })

console.log("Hcaer cosas mientras leer")

console.log("LEYENDO EL segundo+ ARCHIVO")
fs.readFile('./text2.txt','utf-8')
    .then(text =>{
            console.log("segundo texto:",text)
    })
