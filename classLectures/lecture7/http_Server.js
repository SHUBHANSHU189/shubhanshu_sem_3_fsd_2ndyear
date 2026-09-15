const http = require('http');
const PORT = 3000;
const server = http.createServer(( req , res)=> {
   console.log('request received: ${req.method} ${req.url}');

   //set status code and headers

   res.statusCode=200;
   res.setHeader('content-type','text/plain');
   res.setHeader('X-Powered-By','Node.js');

   // send response body
   res.end('hello world');
});
server.listen(PORT, () => {
    console.log(`Server running st http://localhost:${PORT}`);
});