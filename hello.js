import http from 'node:http'

const PORT = 3000
const HOST = 'localhost'

const requestListener = (req, res) => {
    res.writeHead(200)
    res.end("My first server!")
}


const server = http.createServer(requestListener)


server.listen(PORT, HOST, () => {

    console.log(`Server is running on http://${HOST}:${PORT}`);
})

