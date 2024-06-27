const fs=require('node:fs')

console.log("LEYENDO EL PRIMER ARCHIVO")
const text1= fs.readFileSync('./text.txt','utf-8')
console.log("primer texto:",text1)
console.log("Hcaer cosas mientras leer")

console.log("LEYENDO EL segundo+ ARCHIVO")
const text2=fs.readFileSync('./text2.txt','utf-8')
console.log("segundo texto:",text2)

