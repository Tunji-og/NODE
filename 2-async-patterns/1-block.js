const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home Page')
        return;
    }
    if(req.url === '/about'){
        for(let i =0; i<1000;i++){
            for(let j =0; j<1000;j++){
                console.log(`${i} X ${j} = ${i*j}`); 
            }
        }
        res.end('About Page')
        return;
    }
    res.end("Error page")
})

server.listen(5050,()=>{
    console.log('Server is listening on port 5050')
});