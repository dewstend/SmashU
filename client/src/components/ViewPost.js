import React, { Component } from 'react'

import PostComment from './PostComment'

const data = 
    {
        "title": "Palus counter is amazing for neutral game, opinions?",
        "author": "Admin",
        "tag": "Palutena",
        "content": "Paultena is a top tier waifu wtf zxc zxc zczx c czx czxczx czx czxczczxc zxczx czx czxczxczxczzcxczxc zx czxczx czx cc zxczczc   z czx czxczxczczczcz "
    }

const data1=[
    {
        "content": "erga",
        "author": "Admin"
    },
    {
        "content": "erga3",
        "author": "Admin"
    }
]

class ViewPost extends Component {
    constructor() {
        super()
        this.state = {
            post: {}
        }
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron bg-white text-black mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="PostTitle">{data.title}</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td className= "">{data.content}</td>
                            </tr>
                            <tr>
                                <td className="TagAuthor">Charater: {data.tag}</td>
                            </tr>
                            <tr>
                                <td className="TagAuthor">Author: {data.author}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="jumbotron bg-white text-black mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h4 className="CommentTitle">Comment Section</h4>
                    </div>
                    <PostComment data={data1[0]}/>
                    <PostComment data={data1[1]}/>
                </div>
            </div>
        )
    }
}

export default ViewPost