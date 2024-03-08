const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
        return;
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
        return;
    }
    res.end(`
    h1>404 Not Found</h1>
    <p>We can't seem to page you are looking for</p>
    <a href="/" >Go back Home</a>
    `)
})

server.listen(3000)

