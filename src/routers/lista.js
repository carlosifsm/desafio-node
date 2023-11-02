const express = require('express')
const routes = express.Router()

const UserController = require('../controllers/UserController')

routes
    .get('/item', UserController.index)
    .post('/item', UserController.create)
    .put('/item/:id', UserController.update)
    .delete('/item/:id', UserController.delete)

module.exports = routes