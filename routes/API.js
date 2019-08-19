const Lurker = require("../database/Lurker")

const express = require("express")
const api = express.Router()

api.get('/totalUsers', (req, res, next) => {

    Lurker.getTotalUsers()
    .then(count => {
            res.json(count)
        })
    .catch(err => {
        res.json(err)
    })
})

api.get('/totalPosts', (req, res, next) => {

    Lurker.getTotalPosts()
    .then(count => {
            res.json(count)
        })
    .catch(err => {
        res.json(err)
    })
})

module.exports = api