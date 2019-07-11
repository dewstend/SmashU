const Lurker = require("../database/Lurker")

const express = require("express")
const posts = express.Router()
const cors = require('cors')

const Post = require("../models/Post")


posts.use(cors())

process.env.SECRET_KEY = 'secret'

posts.post('/new', (req, res) => {
    
    const postData = {
        title: req.body.title,
        content: req.body.content,
        tag: req.body.tag,
        users_id: req.body.users_id
    }

    Post.create(postData)
                        .then(post => {
                            res.json(
                                { 
                                    status: post.title + ' posted',
                                    posts_id: post.id
                                }
                            )
                        })
                        .catch(err => {
                            res.send('error1: ' + err)
                        })
})

posts.get('/:posts_Id', (req, res, next) => {
    Lurker.getPostById(req.params.posts_Id)
    .then(post => {
            if (post) {
               res.send(post)
            } else {
                throw "Post does not exist"
            }
        })
        .catch(err => {
            throw err
        })
})

posts.get('/:id/comments', (req, res, next) => {
    Lurker.getCommentsByPostsId(req.params.id)
    .then(comments => {
            if (comments) {
               res.send(comments)
            } else {
                throw "Post does not exist"
            }
        })
        .catch(err => {
            throw err
        })
})

posts.get('/last/:nPosts', (req, res, next) => {
    Lurker.getLastNPosts(req.params.nPosts)
    .then(posts => {
            if (posts) {
               res.send(posts)
            } else {
                throw "No posts"
            }
        })
        .catch(err => {
            throw err
        })
})

// Delete
posts.delete('/:posts_Id', (req, res) => {

    Post.destroy(
        {
          where: { 
            id: req.params.posts_Id
            }
        }
    )
    .then(deleted => {
        res.json(
            (deleted) ?
            "Deleted successfuly" :
            "Deleted unsuccessfully"
        )
    })
  })

posts.delete('/:id/comments', (req, res, next) => {
    Lurker.deleteCommentsByPostsId(req.params.id)
    .then(comments => {
            if (comments) {
               res.json(comments)
            } else {
                throw "Post does not exist"
            }
        })
        .catch(err => {
            throw err
        })
})

module.exports = posts