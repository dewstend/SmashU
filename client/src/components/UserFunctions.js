import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            console.log("Registered")
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
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
