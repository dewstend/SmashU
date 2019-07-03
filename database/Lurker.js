const Post = require("../models/Post")
const Comment = require("../models/Comment")

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

const getPostsByUsersId = (u) => {
	return Post.findAll({
        where: {
            users_id: u
        }
    })
}

const getPostById = (p) => {
    return Post.findOne({
        where: {
            id: p
        }
    })
}

const getLastNPosts = (nPosts) => {
    return Post.findAll({
      limit: parseInt(nPosts, 10),
      order: [ [ 'id', 'DESC' ]]
  }) 
}

const getCommentsByPostsId = (p) => {
    return Comment.findAll({
        where: {
            posts_id: p
        }
    })
}



module.exports = {
    getPostsByUsersId,
    getPostById,
    getCommentsByPostsId,
    getLastNPosts
}