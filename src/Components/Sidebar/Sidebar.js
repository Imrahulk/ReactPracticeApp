import React, { Component } from 'react'

import { Link } from 'react-router-dom'
export default class Sidebar extends Component {
    render() {
        return (
            <div class="sidenav">
                <Link to="/About">About</Link>
                <Link to="/Service">Services</Link>
                <Link to="/Expressions">Expressions </Link>
                <Link to='/InLineCssStyling'>Inline Css</Link>
                <Link to='/Externalcss'> ExternalCss</Link>
                <Link to='/FormTest'>Form</Link>
                <Link to='/PostList'>Posts</Link>
               
            </div>
        )
    }
}
