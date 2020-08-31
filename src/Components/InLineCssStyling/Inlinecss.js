import React, { Component } from 'react'

export default class Inlinecss extends Component {
    render() {

        var style = {
            color: 'blue',
            backgroundColor:'yellow',
			border:'5px solid green'
        }
        return (
            <div>
                <p style={ {color:'red'}   }>Sample inlining styling paragraph</p>
                <h3 style= {style}> Style from object </h3>
            </div>
        )
    }
}
