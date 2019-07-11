const Lurker = require("../database/Lurker")

const express = require("express")
const api = express.Router()
const cors = require('cors')

api.use(cors())

process.env.SECRET_KEY = 'secret'

api.get('/totalUsers', (req, res, next) => {

    Lurker.getTotalUsers()
    .then(result => {
            res.json(result.count)
        })
    .catch(err => {
        res.json(err)
    })
})

api.get('/totalPosts', (req, res, next) => {

    Lurker.getTotalPosts()
    .then(result => {
            res.json(result.count)
        })
    .catch(err => {
        res.json(err)
    })
})

module.exports = api