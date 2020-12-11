const { Router } = require('express')
const covid = require('../controllers/covid')
const routes = new Router()

routes.get('/', covid.resultOfTheBiggestCases)

module.exports = routes
