import url from 'node:url'
export const logger = (req) => {
    const { remoteAddress } = req.socket
    process.stdout.write(`Request Headers :>> ${JSON.stringify(req.headers, null, 2)}\n`)
    process.stdout.write(`Request Method :>> ${req.method}\n`)
    process.stdout.write(`Request URL :>> ${req.url}\n`)
    console.log(`urlData :>> ${JSON.stringify(req.url, null, 2)}\n`);
    process.stdin.write(`Request ip >> ${JSON.stringify(remoteAddress)}`)
}