import React, { Component } from 'react'
import axios from 'axios'
import '../User/UserDetails.css'
export default class UserDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            UserDetails: []
        }
    }

    async componentDidMount() {
        let user = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`);
        this.setState({
            UserDetails: user.data
        })
        //console.log(this.state.UserDetails)
        console.log(this.state.UserDetails.company.name)

    }
    onNavigateToHome = () => {
        this.props.history.push('/PostList')
    }


    render() {
        return (
            <div>
                <p>UserDetails</p>
                <div className="card1">
                    {/* <img src="img.jpg" alt="John" style="width:100%" /> */}
                    <h1 >{this.state.UserDetails.name}</h1>
                  
                    {/* <p class="title1">{this.state.UserDetails.company.name}</p> */}
                    <p>Harvard University</p>
                    <a class="a1" href="#"><i class="fa fa-dribbble"></i></a>
                    <a class="a1" href="#"><i class="fa fa-twitter"></i></a>
                    <a class="a1" href="#"><i class="fa fa-linkedin"></i></a>
                    <a class="a1" href="#"><i class="fa fa-facebook"></i></a>
                    <p><button className='button1'>Contact</button></p>
                </div>


                <button onClick={this.onNavigateToHome}>Back</button>
            </div>
        )
    }
}
