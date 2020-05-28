import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'
import Form from '../../components/LoginForm'

class Login extends Component {

    render() {
        return (
            <div className="container box-shadow py-5">
                <div className="row px-md-4">
                    <div className="col-md-4">
                        <Form />
                    </div>
                    <div className="col-md-8 py-5 text-center align-center">
                        <img src="https://lh3.googleusercontent.com/proxy/PCWSWJ2YidNtldd44EdDzMgPL5EFQmmmp1-TplP1D0O64Ek6CqEMjiDxhuc8W9Activf1Q=s0-d" className="" width="80%" height="300" alt="image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;