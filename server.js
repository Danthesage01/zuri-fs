const http = require("http")
const fs = require("fs")

const server = http.createServer( (req, res)=>{
    if(req.url === "/" || req.url === "/home"){
      res.writeHead(200, {"Content-type": "text/html"})
      let readStream = fs.createReadStream("index.html")
      readStream.pipe(res)
    }
    else if (req.url === "/about" ) {
      res.writeHead(200, { "Content-type": "text/html" })
      let readStream = fs.createReadStream("about.html")
      readStream.pipe(res)
    }
    else if (req.url === "/contact" ) {
      res.writeHead(200, { "Content-type": "text/html" })
      let readStream = fs.createReadStream("contact.html")
      readStream.pipe(res)
    }
    else{
      res.writeHead(404, { "Content-type": "text/html" })
      let readStream = fs.createReadStream("error.html")
      readStream.pipe(res)
    }




} )
server.listen(8080, "127.0.0.1")

console.log("server successful")