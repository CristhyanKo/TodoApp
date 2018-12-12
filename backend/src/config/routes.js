const express = require('express')

module.exports = (server) => {
    const router = express.Router()
    server.use('/api', router)

    //TODO ROUTES
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}