import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlock, faCode, faPlus, faEye } from '@fortawesome/free-solid-svg-icons'

class PageHome extends Component {

    render() {

        return (
            <div>
                <div className="container">
                    <div className="row p-5">
                        <div className="col-md-6 text-left py-5">
                            <h2>The Platform for API Design and Documentation with OpenAPI</h2>
                            <p className="lead">A space for you to manage all of your APIs and Domains Create, document and share your work easily.</p>
                        </div>
                        <div className="col-md-6 text-left">
                            <img src="https://lh3.googleusercontent.com/proxy/PCWSWJ2YidNtldd44EdDzMgPL5EFQmmmp1-TplP1D0O64Ek6CqEMjiDxhuc8W9Activf1Q=s0-d" className="img-fluid" alt="Image" width="80%" height="400" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 card">
                            <div className="row text-center py-5">
                                <div className="col-4">
                                    <a href="#">Terms of service</a>
                                </div>
                                <div className="col-4">
                                    <a href="#">Contact the developer</a>
                                </div>
                                <div className="col-4">
                                    <a href="#">Apache 2.0</a>
                                </div>
                            </div>
                            <div className="row text-left py-2">
                                <div className="col-4 text-muted">
                                    <h4>Title</h4>
                                </div>
                                <div className="col-8">
                                    <h4>inss-G Petstore</h4>
                                </div>
                            </div>
                            <div className="row text-left py-2">
                                <div className="col-4 text-muted">
                                    <h4>BaseURL</h4>
                                </div>
                                <div className="col-8">
                                    <h4>petstore.inss-G.io/v2</h4>
                                </div>
                            </div>
                            <div className="row text-left py-2">
                                <div className="col-4 text-muted">
                                    <h4>Description</h4>
                                </div>
                                <div className="col-8">
                                    <p className="lead">This is a sample server petstore server. You can find out more about inss-G at http://inss-G.io or on irc.freenode.net,#inss-G. For this sample you can use the api key special-key to test the authorization filters.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 text-left">
                                    <label htmlFor="schemes" className="mr-2">Schemes</label>
                                    <select
                                        id="schemes"
                                        name="schemes"
                                        className="btn btn-primary"
                                    >
                                        <option>http</option>
                                        <option>https</option>
                                    </select>
                                </div>
                                <div className="col-6 text-right">
                                    <button type="button" className="btn btn-primary">Authorization</button>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className='col-12'>
                                    <p className=""><strong>Pet</strong> everything about your pets</p>
                                </div>
                                <div className="col-12">
                                    <div className="row m-auto border py-3">
                                        <div className="col-3">
                                        <button type="button" className="btn btn-primary">POST</button>
                                        </div>
                                        <div className="col-6"><p className="mb-0">/pet/ Add new pet to the store</p></div>
                                        <div className="col-3 text-right"><span className="btn text-secondary"><FontAwesomeIcon icon={faUnlock} /></span></div>
                                    </div>
                                    <div className="row m-auto border py-3">
                                        <div className="col-3">
                                        <button type="button" className="btn btn-success">GET </button>
                                        </div>
                                        <div className="col-6"><p className="mb-0">/pet/ Add new pet to the store</p></div>
                                        <div className="col-3 text-right"><span className="btn text-secondary"><FontAwesomeIcon icon={faUnlock} /></span></div>
                                    </div>
                                    <div className="row m-auto border py-3">
                                        <div className="col-3">
                                        <button type="button" className="btn btn-info">PUT </button>
                                        </div>
                                        <div className="col-6"><p className="mb-0">/pet/ Add new pet to the store</p></div>
                                        <div className="col-3 text-right"><span className="btn text-secondary"><FontAwesomeIcon icon={faUnlock} /></span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className='col-12'>
                                    <p className=""><strong>User</strong> operations about user</p>
                                </div>
                                <div className="col-12">
                                    <div className="row m-auto border py-3">
                                        <div className="col-3">
                                        <button type="button" className="btn btn-primary">POST</button>
                                        </div>
                                        <div className="col-6"><p className="mb-0">/pet/ Add new pet to the store</p></div>
                                        <div className="col-3 text-right"><span className="btn text-secondary"><FontAwesomeIcon icon={faUnlock} /></span></div>
                                    </div>
                                    <div className="row m-auto border py-3">
                                        <div className="col-3">
                                        <button type="button" className="btn btn-success">GET </button>
                                        </div>
                                        <div className="col-6"><p className="mb-0">/pet/ Add new pet to the store</p></div>
                                        <div className="col-3 text-right"><span className="btn text-secondary"><FontAwesomeIcon icon={faUnlock} /></span></div>
                                    </div>
                                    <div className="row m-auto border py-3">
                                        <div className="col-3">
                                        <button type="button" className="btn btn-info">PUT </button>
                                        </div>
                                        <div className="col-6"><p className="mb-0">/pet/ Add new pet to the store</p></div>
                                        <div className="col-3 text-right"><span className="btn text-secondary"><FontAwesomeIcon icon={faUnlock} /></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 py-5">
                            <div className="py-5 px-3 my-5">
                                <h3>"Start your functional, security and performance testing right from the OpenAPI Spec. Swagger tooling and ReadyAPI platform make it easy to rapidly create, manage, & execute API test in your pipeline."</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-md-3">
                            <div className="card p-2 text-center">
                                <span className="h1 pt-3"><FontAwesomeIcon icon={faCode} /></span>
                                <h6>OpenAPI</h6>
                                <br/>
                                <p className="text-justify">Open API Specification (formarly known as Swagger Spacification) is as API description formate for Rest APIs. It is equally suitable for designing new APIs and for documenting your existing APIs</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2 text-center">
                                <span className="h1 pt-3"><FontAwesomeIcon icon={faPlus} /></span>
                                <h6>Create an API</h6>
                                <br/>
                                <p className="text-justify">Open API Specification (formarly known as Swagger Spacification) is as API description formate for Rest APIs. It is equally suitable for designing new APIs and for documenting your existing APIs</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2 text-center">
                                <span className="h1 pt-3"><FontAwesomeIcon icon={faEye} /></span>
                                <h6>Publish the API</h6>
                                <br/>
                                <p className="text-justify">Open API Specification (formarly known as Swagger Spacification) is as API description formate for Rest APIs. It is equally suitable for designing new APIs and for documenting your existing APIs</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2 text-center">
                                <span className="h1 pt-3"><FontAwesomeIcon icon={faCode} /></span>
                                <h6>API Auto Mocking</h6>
                                <br/>
                                <p className="text-justify">Open API Specification (formarly known as Swagger Spacification) is as API description formate for Rest APIs. It is equally suitable for designing new APIs and for documenting your existing APIs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageHome;