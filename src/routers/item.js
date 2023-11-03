const express = require('express')
const routes = express.Router()

const ItemController = require('../controllers/ItemController')

routes
    .get('/item/:id?', ItemController.index)
    .post('/item', ItemController.create)
    .put('/item/:id', ItemController.update)
    .delete('/item/:id', ItemController.delete)

module.exports = routes