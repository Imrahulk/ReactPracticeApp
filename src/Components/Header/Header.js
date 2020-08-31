import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div class="header">
                <a href="#default" class="logo">React Practice</a>
                <div class="header-right">
                    <Link className="active" to='/Home'>Home</Link>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        )
    }
}
