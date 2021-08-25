const http = require('http')
const { isTypedArray } = require('node:util/types')
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h1 style="color:red">hello kanhu is here</h1>')
})
server.listen(5000)
