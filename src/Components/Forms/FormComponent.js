import React, { Component } from 'react'

export default class FormComponent extends Component {
    render() {
        return (
            <>
                <div class="container">
                    <form>
                        <div class="form-group row"></div>
                        <div class="form-group row"></div>
                        <div class="form-group row">
                            <label for="fname" className="col-sm-2 col-form-label">FirstName</label>
                            <div class="col-sm-4">
                                <input type="email" className="form-control" id="fname" placeholder="First Name" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="Email" className="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-4">
                                <input type="email" className="form-control" id="Email" placeholder="Email" />
                            </div>
                        </div>
                        {/* <button type="submit" className="btn btn-primary">Register</button> */}
                        <input type="submit" className="btn btn-primary" value="Register"></input>

                    </form>
                </div>
            </>
        )
    }
}
