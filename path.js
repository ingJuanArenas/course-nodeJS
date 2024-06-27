const path= require('node:path')

console.log(path.sep)

const filePath = path.join('content','subfoldeer','mifile.txt')
console.log(filePath)

const base = path.basename('/tmp/manueñ-secret-folder/mypassword.txt')
console.log(base)

const filename= path.basename('/tmp/manueñ-secret-folder/mypassword.txt','.txt')
console.log(filename)

const extension = path.extname('image.jpg')
console.log(extension)
