const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const CommentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  post: {
    type: Schema.Types.ObjectId, 
    ref: 'post',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Comment = mongoose.model('comment', CommentSchema)
