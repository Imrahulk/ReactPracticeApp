import React, { Component } from 'react'
import '../PostList/PostList.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class PostList extends Component {
    state = {
        Posts: []
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts').then(
            res => {
                this.setState({ Posts: res.data })
            }
        )
    }

    renderTableRows = () => {
        if (this.state.Posts !== undefined)
            return this.state.Posts.map(post => {
                return (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td><button><Link to={'/Preview/' + post.id}>Preview</Link></button></td>
                        {/* <td>{post.body}</td> */}
                    </tr>
                )

            })
    }

    render() {
        return (
            <div>
                <h1 className='textaligh'>Post Lists</h1>
                <table id="formtable" className="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Post Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Preview</th>
                            {/* <th scope="col">Body</th> */}
                            {/* {this.renderTableHeader()} */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
