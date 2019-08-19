import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

import { Link  } from 'react-router-dom'

import PreviewPost from './PreviewPost'
import {getPostsByUsersId} from './UserFunctions'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            lastPosts: []
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.username

        })
        getPostsByUsersId(decoded.id)
        .then(res => {
            this.setState(
                {
                    lastPosts: res.data
                }
            )
        })
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>{this.state.username}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 className="text-center">Publicaciones por este usuario</h1>
                    <div className="latest-posts">
                        {this.state.lastPosts && this.state.lastPosts.map((post, index) => {
                        return <Link to={`/posts/` + post._id} key={index}>
                            <PreviewPost 
                                 post={post}
                                 key={index}
                                />
                                </Link>
                            })}
                        </div>
                </div>
            </div>
        )
    }
}

export default Profile