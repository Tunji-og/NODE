const {readFile, writeFile} = require('fs')

//check file path  exists
readFile('../content/first.txt',"utf-8",(err,result)=>{
    if (err){
        console.log(err)
        return
    }
   console.log(result)
   console.log('completed first task')
})
console.log("Starting Next")           