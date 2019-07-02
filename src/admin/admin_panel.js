const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.ADMIN_PORT || 3001

const app = next({
  dev,
  dir: './src/admin'
})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/oi', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + port)
  })
}).catch(ex => {
  console.error(ex.stack)
  process.exit(1)
})
