const Post = require("../models/Post")
const Comment = require("../models/Comment")
const User = require("../models/User")

// posts.map(({id, title, content, tag, users_id}) => ({id, title, content, tag, users_id}))

/* Promise validation and execution
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

*/

// Posts 
const getPostsByUsersId = (u) => {
	return Post.find({ user: u })
        .populate('user', ['username'])
}

const getPostById = (p) => {
    return Post.findOne({ _id: p })
        .populate('user', ['username'])
}

const getLastNPosts = (nPosts) => {
    return Post.find()
        .populate('user', ['username'])
        .sort({'date': -1})
        .limit(parseInt(nPosts, 10))
}

const getTotalPosts = () => {
    return Post.estimatedDocumentCount()
}

// Comments
const getCommentsByPostsId = (p) => {
    return Comment.find({ post: p })
        .populate('user', ['username'])
}

const deleteCommentsByPostsId = (p) => {
    return Comment.deleteMany({ post: p }, (err) => console.log(err))
}

// Users
const getTotalUsers = () => {
    return User.estimatedDocumentCount()
}



module.exports = {
    getPostsByUsersId,
    getPostById,
    getCommentsByPostsId,
    deleteCommentsByPostsId,
    getLastNPosts,
    getTotalUsers,
    getTotalPosts
}