import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            username: newUser.username,
            answer: newUser.answer,
            password: newUser.password
        })
        .then(res => {
            console.log("Registered")
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            username: user.username,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const createPost = newPost => {
    return axios
        .post('/posts/new', {
            title: newPost.title,
            content: newPost.content,
            tag: newPost.tag,
            users_id: newPost.users_id
        })
}

export const createComment = newComment => {
    return axios
        .post('/comments/new', {
            content: newComment.content,
            posts_id: newComment.posts_id,
            users_id: newComment.users_id
        })
        .catch(err => {
            console.log(err)
        })
}

export const getLastNPosts = nPosts => {
    return axios
        .get('posts/last/' + nPosts)
        /*.then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })*/
}

export const getPostById = posts_Id => {
    return axios
        .get('/posts/' + posts_Id)
        /*.then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })*/
}

export const getUserById = users_Id => {
    return axios
        .get('/users/' + users_Id)
        /*.then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })*/
}

export const getCommentsByPostsId = posts_Id => {
    return axios
        .get('/posts/' + posts_Id + '/comments')
        /*.then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })*/
}

export const getPostsByUsersId = users_Id => {
    return axios
        .get('users/' + users_Id + '/posts/')
        /*.then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })*/
}

export const getTotalPosts = () => {
    return axios
        .get('/api/totalPosts')
}

export const getTotalUsers = () => {
    return axios
        .get('/api/totalUsers')
}

export const deletePostById = posts_Id => {
    return axios
        .delete('/posts/' + posts_Id)
}

export const deleteCommentById = comments_Id => {
    return axios
        .delete('/comments/' + comments_Id)
}

export const deleteAllCommentsInPostById = posts_Id => {
    return axios
        .delete('/posts/'+ posts_Id +'/comments')
}