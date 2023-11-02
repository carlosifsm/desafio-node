const express = require('express')
const routes = require('./routers')
const app = express()

app.use(express.json())
app.use(routes)

app.listen(5000, '127.0.0.1',() => {
    console.log('Server online at http://127.0.0.1:5000')
  })