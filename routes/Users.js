const Lurker = require("../database/Lurker")

const express = require("express")
const users = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')

const User = require("../models/User")

users.post('/register', (req, res) => {
    const userData = {
        username: req.body.username,
        answer: req.body.answer,
        password: req.body.password
    }
    User.findOne(
        {
            username: req.body.username
        }
    )
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

users.post('/login', (req, res, next) => {
    User.findOne(
        {
            username: req.body.username
        }
    )
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    jwt.sign(
                        { id: user.id,
                          username: user.username
                        }, 
                        process.env.SECRET_KEY, 
                        { expiresIn: 1440 },
                        (err, token) => {
                            if(err) throw err;
                            res.send(token)
                        }
                    )
                }
            } else {
                res.status(400).json({ error: req.body.username + ' does not exist' })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
})

users.get('/:users_id', (req, res, next) => {
    User.findOne(
        {
            id: req.params.users_id
        }
    )
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
                res.send("User does not exist")
            }
        })
        .catch(err => {
            throw err
        })

})


module.exports = users;