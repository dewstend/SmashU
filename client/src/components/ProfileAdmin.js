import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

import { Link, withRouter } from 'react-router-dom'

import PreviewPost from './PreviewPost'
import {getPostsByUsersId} from './UserFunctions'

class ProfileAdmin extends Component {
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
            console.log(res)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Perfil de Administrador</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Nombre:</td>
                                <td>{this.state.username}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="col-sm-12">
                        <ul className="nav justify-content-center">
                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#publi">Publicaciones</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#repor">Reportes</a></li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane active" id="publi">
                                <h1 className="text-center">Publicaciones por este usuario</h1>
                                <div className="latest-posts">
                                    {this.state.lastPosts && this.state.lastPosts.map((post, index) => {
                                        return <Link to={`/posts/` + post.id} key={index}>
                                                    <PreviewPost 
                                                        data={post}
                                                        key={index}
                                                    />
                                                </Link>
                                    })}
                                </div>
                            </div>
                      
                            <div className="tab-pane justify-content-center" id="repor">
                                <table className="table center">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col-4">Total de Usuarios Registrados:</th>
                                            <th scope="col-4">Total de Publicaciones Creadas:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileAdmin