import React, { Component } from 'react'
import '../Preview/Preview.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router";

export default class Preview extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            IndividualPost: [],
            PostId: this.props.match.params.id,
            UserDetails: []
        }
    }
 onNavigateToHome = () => {
    this.props.history.push('/PostList')
}
onRouteChange = (id) =>{ 
     let path = `/UserDetails/${id}`; 
     this.props.history.push(path);
  }
  viewPost = (id) =>{
      
    this.props.history.push(`/PostFeed/${id}`)
  }
async componentDidMount() {
    let postDetails = await axios.get(`http://jsonplaceholder.typicode.com/posts/${this.state.PostId}`);
    this.setState({
        IndividualPost: postDetails.data
    })
    let user = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.IndividualPost.userId}`);
    this.setState({
        UserDetails: user.data
    })

}

render() {
    const id2 = this.props.match.params.id
    return (
        <div>

            <div class="card">
                <h1>Title</h1>
                <h1>{this.state.IndividualPost.title}</h1>
                <p class="price" onClick={() =>  this.onRouteChange(this.state.UserDetails.id)} >Created By : {this.state.UserDetails.name}</p>

                <p><label className="btn-success" onClick={() => this.viewPost(this.state.PostId)}>ViewPost</label></p>

            </div>
            <p><button className="btn-danger" onClick={this.onNavigateToHome}>Back</button></p>

        </div>
    )
}
}
