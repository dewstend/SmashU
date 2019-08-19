const express = require("express")
const comments = express.Router()

const Comment = require("../models/Comment")

comments.post('/new', (req, res) => {
    
    const commentData = {
        content: req.body.content,
        user: req.body.user,
        post: req.body.post
    }

    Comment.create(commentData)
                        .then(comment => {
                            res.json({ status: comment.content + ' commented' })
                        })
                        .catch(err => {
                            res.send({
                                error1: err,
                                commentData
                            })
                        })
})

// Delete
comments.delete('/:comments_Id', (req, res) => {

    Comment.findByIdAndDelete(req.params.comments_Id)
    .then(deleted => {
        res.json(
            (deleted) ?
            "Deleted successfuly" :
            "Deleted unsuccessfully"
        )
    })
  })

module.exports = comments