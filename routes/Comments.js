const express = require("express")
const comments = express.Router()
const cors = require('cors')

const Comment = require("../models/Comment")


comments.use(cors())

process.env.SECRET_KEY = 'secret'

comments.post('/new', (req, res) => {
    
    const commentData = {
        content: req.body.content,
        users_id: req.body.users_id,
        posts_id: req.body.posts_id
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

    Comment.destroy(
        {
          where: { 
            id: req.params.comments_Id
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

module.exports = comments