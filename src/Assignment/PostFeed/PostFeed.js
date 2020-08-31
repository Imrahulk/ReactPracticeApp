import React, { Component } from 'react'
import '../PostFeed/PostFeed.css'
import axios from 'axios';
export default class PostFeed extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            comments: [],
            IndividualPost: []

        }

    }
    async componentDidMount() {

        let commentData = await axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${this.state.id}`);
        this.setState({
            comments: commentData.data
        })
        let postDetails = await axios.get(`http://jsonplaceholder.typicode.com/posts/${this.state.id}`);
        this.setState({
            IndividualPost: postDetails.data
        })
        console.log(this.state.IndividualPost.body)
    }
    onNavigateToHome = () => {
        this.props.history.push('/PostList')
    }
    render() {
        return (
            <div className="row d-flex justify-content-center mt-100 mb-100">
                <div className="col-lg-8">
                    <div className="card1">
                        <div className="card1-body text-left">
                            <h4 className="card1-title">Title : {this.state.IndividualPost.title}</h4>
                        </div>
                        <div className="card1-body text-left">
                            <h4 className="card1-title">{this.state.IndividualPost.body}</h4>
                        </div>
                        <div className="comment-widgets">



                            {this.state.comments.map(comm =>
                                <div className="d-flex flex-row comment-row ">
                                    <div className="p-2"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg" alt="user" width="50" className="rounded-circle" /></div>
                                    <div className="comment-text w-100">
                                        <h6 className="font-medium">{comm.name}</h6> <span className="m-b-15 d-block">{comm.body} </span>
                                        <div className="comment-footer"> <span className="text-muted float-right">Email :{comm.email}</span> <button type="button" className="btn btn-cyan btn-sm">Edit</button> <button type="button" className="btn btn-success btn-sm">Publish</button> <button type="button" className="btn btn-danger btn-sm">Delete</button> </div>
                                    </div>

                                    

                                </div>


                            )}
                            <p><button className="btn-primary" onClick={this.onNavigateToHome}>Back</button></p>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
