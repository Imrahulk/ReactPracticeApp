import React, { Component } from 'react'

export default class Expressions extends Component {

    render() {
        function formateName(user) {

            return user.firstName + ' ' + user.lastName;
        }

        let user = {
            firstName : 'Rahul',
            lastName  : 'K nair'
        };

        return (
            <div>
                <h2>{1 + 1}</h2>
                <h2>my name is {user.firstName}</h2>
        <h2>my full name is {formateName(user)}</h2>
            </div>
        )
    }
}
