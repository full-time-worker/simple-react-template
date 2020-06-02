import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus, faEdit, faShare } from '@fortawesome/free-solid-svg-icons'
import CreateModal from '../../components/CreateModal'
import CreateAPI from '../../components/CreateAPI'

class PageAdministration extends Component {

   render() {

      return (
         <div>
            <div className="container">
               <div className="row py-5">
                  <div className="col-md-8 py-5 my-md-5">
                     <h2>Faster, Standardized API Design</h2>
                     <p className="lead">Desgin APIs in a powerful and intuitive editor that is built for speed and efficiency, without any loss in design consistency.</p>
                  </div>
                  <div className="col-md-4">
                     <img src="https://lh3.googleusercontent.com/proxy/PCWSWJ2YidNtldd44EdDzMgPL5EFQmmmp1-TplP1D0O64Ek6CqEMjiDxhuc8W9Activf1Q=s0-d" className="img-fluid" alt="image" />
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-3">
                     <div className="card py-5 text-center">
                        <h1 className="cursor" data-toggle="modal" data-target="#createModal"><FontAwesomeIcon icon={faPlus} /></h1>
                        <h6>Create New</h6>
                     </div>
                     <CreateModal />
                     <CreateAPI />
                  </div>
                  <div className="col-md-3">
                     <div className="card py-5 text-center">
                        <h1 className="cursor"><FontAwesomeIcon icon={faEdit} /></h1>
                        <h6>Document APIs</h6>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="card py-5 text-center">
                        <h1 className="cursor"><FontAwesomeIcon icon={faSearch} /></h1>
                        <h6>Search</h6>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="card py-5 text-center">
                        <h1 className="cursor"><FontAwesomeIcon icon={faShare} /></h1>
                        <h6>Share and Collaborate</h6>
                     </div>
                  </div>
               </div>
            </div>
            
         </div>
      )
   }
}

export default PageAdministration;