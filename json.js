import http from 'node:http'

const PORT = 4000
const HOST = 'localhost'


const requestListener = (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200)
    res.end(`{"message": "This is a JSON response"}`)
}

const server = http.createServer(requestListener)

server.listen(PORT, HOST, () => {

    console.log(`Server is running on http://${HOST}:${PORT}`);
})
