import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import PreviewPost from './PreviewPost'

import {getLastNPosts} from './UserFunctions'

import header from '../background.jpg'

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
            console.log("Failed to fetch last posts")
        })      

    }


    render () {
        return (
            <div className="container">
                <img src={header} alt="site header" className="landingHeader"/>
                {/*<div className="jumbotron mt-5"> comentario*/}
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Últimas Publicaciones</h1>

                        <div className="latest-posts">
                            {this.state.lastPosts && this.state.lastPosts.map((post, index) => {
                                //TODO: FIX Cast to ObjectId error post._id
                                return <Link to={`/posts/` + post._id} key={index}>
                                    <PreviewPost 
                                        post={post}
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