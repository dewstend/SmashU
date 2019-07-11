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


User.hasMany(Post, {foreignKey: 'users_id'})
Post.belongsTo(User, {foreignKey: 'users_id'})

User.hasMany(Comment, {foreignKey: 'users_id'})
Comment.belongsTo(User, {foreignKey: 'users_id'})

Post.hasMany(Comment, {foreignKey: 'posts_id'})
Comment.belongsTo(Post, {foreignKey: 'posts_id'})

const getPostsByUsersId = (u) => {
	return Post.findAll({
        where: {
            users_id: u
        },
        include: [{
            model: User,
            attributes: ['username']
        }]
    })
}

const getPostById = (p) => {
    return Post.findOne({
        where: {
            id: p
        },
        include: [{
            model: User,
            attributes: ['username']
        }]

    })
}

const getLastNPosts = (nPosts) => {
    return Post.findAll({
      limit: parseInt(nPosts, 10),
      order: [ [ 'id', 'DESC' ]],
      include: [{
            model: User,
            attributes: ['username']
        }]
  }) 
}

const getCommentsByPostsId = (p) => {
    return Comment.findAll({
        where: {
            posts_id: p
        },
        include: [{
            model: User,
            attributes: ['username']
        }]
    })
}

const deleteCommentsByPostsId = (p) => {
    return Comment.destroy({
        where: {
            posts_id: p
        }
    })
}

const getTotalUsers = () => {
    return User
        .findAndCountAll()
}

const getTotalPosts = () => {
    return Post
        .findAndCountAll()
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