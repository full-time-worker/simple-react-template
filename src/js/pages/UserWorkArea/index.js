import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlock } from '@fortawesome/free-solid-svg-icons'

class UserWorkArea extends Component {

   render() {

      return (
         <div>
            <div className="row py-5 container-fluid">
               <div className="col-md-6">
                  <div className="row">
                     <div className="ml-3 mr-1 my-2">
                        <div class="btn-group">
                           <button type="button" className="btn">File</button>
                           <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span className="sr-only">Toggle Dropdown</span>
                           </button>
                           <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                           </div>
                        </div>
                     </div>
                     <div className="mx-1 my-2">
                        <div class="btn-group">
                           <button type="button" className="btn ">Edit</button>
                           <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span className="sr-only">Toggle Dropdown</span>
                           </button>
                           <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                           </div>
                        </div>
                     </div>
                     <div className="mx-1 my-2">
                        <div class="btn-group">
                           <button type="button" className="btn ">Generate server</button>
                           <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span className="sr-only">Toggle Dropdown</span>
                           </button>
                           <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                           </div>
                        </div>
                     </div>
                     <div className="mx-1 my-2">
                        <div class="btn-group">
                           <button type="button" className="btn ">Generate Client</button>
                           <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span className="sr-only">Toggle Dropdown</span>
                           </button>
                           <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="bg-dark box-height">
                     <div className="">
                        
                     </div>
                  </div>
               </div>
                  <div className="col-md-6 card mt-5">
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
                           <div className="row m-auto border py-3">
                                 <div className="col-3">
                                 <button type="button" className="btn btn-danger">DELETE </button>
                                 </div>
                                 <div className="col-6"><p className="mb-0">/pet/ Add new pet to the store</p></div>
                                 <div className="col-3 text-right"><span className="btn text-secondary"><FontAwesomeIcon icon={faUnlock} /></span></div>
                           </div>
                        </div>
                     </div>
                  </div>
            </div>
         </div>
      )
   }
}

export default UserWorkArea;