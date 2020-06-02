import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faEdit, faSitemap, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

class CreateModal extends Component {

    render() {
        return (
         <div className="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLongTitle">Create New</h5>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div className="modal-body px-md-5">
                     <a href="#" 
                        className="d-block text-dark h6" 
                        data-toggle="modal" 
                        data-target="#createAPI"
                     > <span className="pr-2"><FontAwesomeIcon icon={faPlusCircle} /></span>Create New API</a>
                     <a href="#" className="d-block text-dark h6"><span className="pr-2"><FontAwesomeIcon icon={faEdit} /></span>Import and Document API</a>
                     <a href="#" className="d-block text-dark h6"><span className="pr-2"><FontAwesomeIcon icon={faPlusCircle} /></span>Create New Domain</a>
                     <a href="#" className="d-block text-dark h6"><span className="pr-2"><FontAwesomeIcon icon={faSitemap} /></span>Create New Organization</a>
                     <a href="#" className="d-block text-dark h6"><span className="pr-2"><FontAwesomeIcon icon={faFolderOpen} /></span>Create New Project</a>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
               </div>
            </div>
         </div>
        )
    }
}

export default CreateModal;