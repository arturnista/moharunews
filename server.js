const serve = require('serve')
const port = process.env.PORT || 5001
const server = serve(__dirname + '/build', { port: port, ignore: ['node_modules'], single: true })
