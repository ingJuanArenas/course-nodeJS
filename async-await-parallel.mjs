import {readFile} from 'node:fs/promises'

Promise.all([
    readFile('./text.txt','utf-8'),
    readFile('./text2.txt','utf-8')
]).then(([text1,text2])=>{
    console.log("primer texto:",text1)
    console.log("segundo texto:",text2)
})