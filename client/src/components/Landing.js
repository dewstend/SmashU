import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import PreviewPost from './PreviewPost'

import {getLastNPosts} from './UserFunctions'

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastPosts: []
        }
    }

    componentDidMount () {
        getLastNPosts(5)
        .then(res => {
            this.setState(
                {
                    lastPosts: res.data
                }
            )
        })
        .catch(err => {
            console.log(err)
        })      

    }


    render () {
        return (
            <div className="container">
                <div id= "LandJumbo" className="jumbotron">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center" >BIENVENIDO</h1>
                    </div>
                </div>
                {/*<div className="jumbotron mt-5"> comentario*/}
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Últimas Publicaciones</h1>

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
                {/*</div>*/}

            </div>

        )
    }
}

export default withRouter(Landing)