import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'
import Navbar from '../Navbar/Navbar'

class Header extends Component {

    state = {
        isAuthenticated: false
    }

    render() {
        return (
            <header>
                <Navbar isAuthenticated={this.state.isAuthenticated} />
            </header>
        )
    }
}

export default Header;