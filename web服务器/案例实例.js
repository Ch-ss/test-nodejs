const fs = require('fs')
const http = require('http')
const path = require('path')
const server = http.createServer()
server.on('request', (req, res) => {
  const url = req.url
  // const fpath = path.join(__dirname, url)
  let fpath = ''
  if(url === '/') {
    fpath = path.join(__dirname, '../test1.html')
  }
  // 读取文件
  fs.readFile(fpath,(err, dataStr) => {
    if (err) res.end('NO find');
    res.end(dataStr)
  })
})
server.listen(80, () => {
  console.log('server running at http://127.0.0.1');
})