import http from 'node:http'

const PORT = 4500
const HOST = 'localhost'

const requestListener = (req, res) => {
    res.setHeader('Content-Type', "text/csv")
    res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
    res.writeHead(200)
    res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
}


const server = http.createServer(requestListener)


server.listen(PORT, HOST, () => {

    console.log(`Server is running on http://${HOST}:${PORT}`);
})

