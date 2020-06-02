import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faEdit, faSitemap, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

class CreateAPI extends Component {

    render() {
        return (
         <div className="modal fade" id="createAPI" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLongTitle">Select a Template and create a Blank API</h5>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div className="modal-body px-md-5">
                     <p>Enter a unique name for your API definition below and Select a Template Select name for Blank API</p>
                     <form>
                        <div className="form-group">
                           <div className="form-group-item">
                              <label htmlFor="name" className="text-muted">Name</label>
                              <input 
                                 type="text"
                                 className="form-control"
                                 name="name"
                                 id="name"
                                 placeholder="Enter name"
                              />
                           </div>
                           <div className="form-group-item">
                              <label htmlFor="version" className="text-muted">Version</label>
                              <input 
                                 type="number"
                                 className="form-control"
                                 name="version"
                                 id="version"
                                 placeholder="Enter version"
                              />
                           </div>
                           <div className="form-group-item">
                              <label htmlFor="title" className="text-muted">Title</label>
                              <input 
                                 type="text"
                                 className="form-control"
                                 name="title"
                                 id="title"
                                 placeholder="Enter description"
                              />
                           </div>
                           <div className="form-group-item">
                              <label htmlFor="description" className="text-muted">Description</label>
                              <input 
                                 type="text"
                                 className="form-control"
                                 name="description"
                                 id="description"
                                 placeholder="Enter description"
                              />
                           </div>
                           <div className="form-group-item">
                              <label htmlFor="owner" className="text-muted">Description</label>
                              <select 
                                 type="select"
                                 className="form-control"
                                 name="owner"
                                 id="owner"
                              >
                                 <option>one</option>
                                 <option>two</option>
                              </select>
                           </div>
                           <div className="form-group-item">
                              <label htmlFor="owner" className="text-muted">Project</label>
                              <select 
                                 type="select"
                                 className="form-control"
                                 name="owner"
                                 id="owner"
                              >
                                 <option>one</option>
                                 <option>two</option>
                              </select>
                           </div>
                           <div className="form-group-item">
                              <label htmlFor="owner" className="text-muted">Validaty</label>
                              <select 
                                 type="select"
                                 className="form-control"
                                 name="owner"
                                 id="owner"
                              >
                                 <option>one</option>
                                 <option>two</option>
                              </select>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className="modal-footer">
                  <button type="button" className="btn btn-info" >Create API</button>
                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
               </div>
            </div>
         </div>
        )
    }
}

export default CreateAPI;