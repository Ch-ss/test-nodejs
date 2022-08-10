const http = require('http')
const serve = http.createServer()
serve.on('request', function(req,res) {
  console.log('Someone visit our web server');
  const str = `你请求的地址是${req.url},请求的类型是${req.method}`
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(str)
  console.log(str);
})
serve.listen(8080, function() {
  console.log('server running at http://127.0.0.1:8080');
})