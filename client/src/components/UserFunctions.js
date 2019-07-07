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