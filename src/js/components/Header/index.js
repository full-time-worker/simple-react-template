import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

class Header extends Component {

    render() {
        return (
            <header>
                <div className="">
                    <nav className="navbar container-fluid navbar-expand-lg navbar-light px-5 py-3">
                        <a class="navbar-brand" href="#">
                            <img src="https://www.pngarts.com/files/3/Jaguar-Logo-PNG-Download-Image.png" width="110" height="50" alt="Logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">User work area</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Setting</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Administration</a>
                                </li>
                                <li className="nav-item">
                                <button type="button" className="btn btnColor radius px-md-4 py-2 px-5 nav-link mt-3 mt-lg-0 text-light">Sign Up</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;