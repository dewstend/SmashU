const Lurker = require("../database/Lurker")

const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require("../models/User")

users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    
    const userData = {
        username: req.body.username,
        answer: req.body.answer,
        password: req.body.password
    }

    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.username + ' registered' })
                        })
                        .catch(err => {
                            res.send('error1: ' + err)
                        })
                })
            } else {
                res.json({ error: "User already exists" })
            }
        })
        .catch(err => {
            res.send('error2: ' + err)
        })
})

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

users.get('/:username', (req, res, next) => {
    User.findOne({
        where: {
            username: req.params.username
        }
    })
        .then(user => {
            if (user) {
                res.send({id: user.id, username: user.username, email: user.email})
            } else {
                res.status(400).json({ error1: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error2: err })
        })
})

users.get('/:id/posts', (req, res, next) => {

    Lurker.getPostsByUsersId(req.params.id)
    .then(posts => {
            if (posts) {
               res.send(posts)
            } else {
                throw "User does not exist"
            }
        })
        .catch(err => {
            throw err
        })

})

module.exports = users