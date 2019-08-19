const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'user',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

})

module.exports = Post = mongoose.model('post', PostSchema)
