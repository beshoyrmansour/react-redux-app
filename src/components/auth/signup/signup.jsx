import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Signup extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="container">
                <div className="row card">
                    <form className="col s12 card-content">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                                <label for="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
                                <label for="disabled">Disabled</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button type="submit" className="btn">submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        )
    }
}
