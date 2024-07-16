import http from 'node:http'

const PORT = 8000
const HOST = 'localhost'


const requestListener = (req, res) => {
    res.setHeader('Content-Type', "text/html")
    res.writeHead(200);
    res.end(`<html><body><h1>This is HTML</h1></body></html>`);
}

const server = http.createServer(requestListener)

server.listen(PORT, HOST, () => {

    console.log(`Server is running on http://${HOST}:${PORT}`);
})
