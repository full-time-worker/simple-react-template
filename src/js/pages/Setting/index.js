import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class PageSetting extends Component {

   state = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      username: '',
      email: ''
   }

   changeHandler = event => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   render() {
      let {oldPassword, newPassword, confirmPassword, username, email} = this.state

      return (
         <div>
            <div className="container">
               <div className="row border rounded pt-md-5">
                  <div className="col">
                     <form>
                        <div className="form-row">
                           <div className="col-6 py-2 form-group">
                              <label htmlFor="oldPassword" className="text-muted">Old password</label>
                              <input 
                                 type="password" 
                                 name="oldPassword" 
                                 id="oldPassword"
                                 value={oldPassword}
                                 onChange={this.changeHandler}
                                 className="form-control"
                                 placeholder="Enter old password" 
                              />
                           </div>
                           <div className="col-6 py-2 form-group">
                              <label htmlFor="username" className="text-muted">User name</label>
                              <input 
                                 type="text" 
                                 name="username" 
                                 id="username"
                                 value={username}
                                 onChange={this.changeHandler}
                                 className="form-control"
                                 placeholder="Enter user name" 
                              />
                           </div>
                           <div className="col-6 py-2 form-group">
                              <label htmlFor="newPassword" className="text-muted">New password</label>
                              <input 
                                 type="password" 
                                 name="newPassword" 
                                 id="newPassword"
                                 value={newPassword}
                                 onChange={this.changeHandler}
                                 className="form-control"
                                 placeholder="Enter new password" 
                              />
                           </div>
                           <div className="col-6 py-2 form-group">
                              <label htmlFor="email" className="text-muted">User Email</label>
                              <input 
                                 type="email" 
                                 name="email" 
                                 id="email"
                                 value={email}
                                 onChange={this.changeHandler}
                                 className="form-control"
                                 placeholder="Enter user name" 
                              />
                           </div>
                           <div className="col-6 py-2 form-group">
                              <label htmlFor="confirmPassword" className="text-muted">Confirm password</label>
                              <input 
                                 type="password" 
                                 name="confirmPassword" 
                                 id="confirmPassword"
                                 value={confirmPassword}
                                 onChange={this.changeHandler}
                                 className="form-control"
                                 placeholder="Confrim password" 
                              />
                           </div>
                           <div className="col-6 py-2 form-group">
                              <label htmlFor="deleteAccount" className="text-muted">Delete Account</label>
                              <input 
                                 type="button" 
                                 name="deleteAccount" 
                                 id="deleteAccount"
                                 value='Delete Account'
                                 className="btn btn-danger form-control"
                              />
                           </div>
                           <div className="col py-2 form-group text-center">
                              <button type="button" className="btn btn-warning">
                                 Save Change
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default PageSetting;