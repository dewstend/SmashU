const Lurker = require("../database/Lurker")

const express = require("express")
const posts = express.Router()

const Post = require("../models/Post")

posts.post('/new', (req, res) => {
    
    const postData = {
        title: req.body.title,
        content: req.body.content,
        tag: req.body.tag,
        user: req.body.user
    }

    Post.create(postData)
                        .then(post => {
                            res.json(
                                { 
                                    status: post.title + ' posted',
                                    post: post.id
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
                res.send("Post does not exist")
            }
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

posts.get('/:id/comments', (req, res, next) => {
    Lurker.getCommentsByPostsId(req.params.id)
    .then(comments => {
            if (comments) {
               res.send(comments)
            } else {
                res.send("Post does not exist")
            }
        })
        .catch(err => {
            console.log(err)
        })
})

posts.get('/last/:nPosts', (req, res, next) => {
    Lurker.getLastNPosts(req.params.nPosts)
    .then(posts => {
            if (posts) {
               res.send(posts)
            } else {
                res.send("No posts")
            }
        })
        .catch(err => {
            console.log(err)
        })
})

// Delete
posts.delete('/:posts_Id', (req, res) => {

    Post.findByIdAndDelete(req.params.posts_Id)
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
                res.send("Post does not exist")
            }
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = posts