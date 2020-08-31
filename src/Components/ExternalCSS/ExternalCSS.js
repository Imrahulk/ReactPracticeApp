import React, { Component } from 'react'
import '../ExternalCSS/ExternalCSS.css'
export default class ExternalCSS extends Component {
    render() {
        return (
            <div>
                <button className='mybutton'>Test Button</button>
                <div className='mydiv'>This is a div</div>
                <span className='myspan'>this is a span</span>
            </div>
        )
    }
}
