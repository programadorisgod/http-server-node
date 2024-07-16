import http from 'node:http'
import { authors, books } from './routes.js'
import { logger } from './Logger/logRequest.js'


const PORT = 5000
const HOST = 'localhost'
const bodyStream = []
const routes = {
    '/books': books,
    '/authors': authors,
    '/': '{"message": "hello world"}',
}


const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'application/json')


    req.on('error', err => {
        console.log(err);
        res.statusCode = 400
        res.end()
    })
    req
        .on('data', chunk => {
            bodyStream.push(chunk)
        })
        .on('end', () => {
            if (bodyStream.length >= 1) {
                const bufferData = Buffer.concat(bodyStream)
                const requestBody = JSON.parse(bufferData)
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(requestBody, null, 2));
            }
        })

    logger(req)

    const { url } = req

    handleRoutes(url, res)


}
const handleRoutes = (endPoint, res) => {

    if (routes[endPoint]) {
        res.statusCode = 200
        res.end(routes[endPoint])
    }
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('X-Powered-By', 'el ua')
    res.statusCode = 404
    res.end('<h1>Route not found</h1>')
}


const server = http.createServer(requestListener)


server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
})
