import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

class Form extends Component {

   state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: {},
      isAgree: false
   }

   changeHandler = event => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   clickHandler = () => {
      let { isAgree } = this.state
      if(!isAgree) {
         this.setState(prev => ({ isAgree: true}))
      } else {
         this.setState(prev => ({ isAgree: false}))
      }
   }

   render() {
      let { name, email, password, confirmPassword } = this.state

      return (
         <div className="container py-md-5">
         <h4 className="font-weight-bold mb-4">Sign Up</h4>
         <form>
               <div className="py-2">
                  <label htmlFor="name" className="text-muted">User name</label>
                  <input 
                     type="text" 
                     name="name" 
                     id="name"
                     value={name}
                     onChange={this.changeHandler}
                     className="form-control"
                     placeholder="Enter user name" 
                  />
               </div>
               <div className="py-2">
                  <label htmlFor="email" className="text-muted">Email</label>
                  <input 
                     type="email" 
                     name="email" 
                     id="email"
                     value={email}
                     onChange={this.changeHandler}
                     className="form-control"
                     placeholder="Enter email" 
                  />
               </div>
               <div className="py-2">
                  <label htmlFor="password" className="text-muted">Password</label>
                  <input 
                     type="password" 
                     name="password" 
                     id="password"
                     value={password}
                     onChange={this.changeHandler}
                     className="form-control"
                     placeholder="Enter password" 
                  />
               </div>
               <div className="py-2">
                  <label htmlFor="confirmPassword" className="text-muted">Confirm password</label>
                  <input 
                     type="confirmPassword" 
                     name="confirmPassword" 
                     id="confirmPassword"
                     value={confirmPassword}
                     onChange={this.changeHandler}
                     className="form-control"
                     placeholder="Enter password" 
                  />
               </div>
               <div className=" d-inline-block">
               <button 
                  type="button" 
                  className="btn btnColor1 font-weight-bold mr-2 px-lg-4 my-1"
               >Sign Up</button>
               <a 
                  type="button" 
                  className="btn btnColor2 font-weight-bold px-lg-4  my-1"
                  href="/login"
               >Sign In</a>
               
               </div>
               <button 
                  type="button" 
                  className="btn btn-dark btn-block font-weight-bold px-lg-4  my-1"
               >Create accoutn with Github</button>
               <div className="custom-control custom-checkbox my-2" >
                  <input 
                     type="checkbox" 
                     className="custom-control-input" 
                     id="customCheck1"
                     onClick={this.clickHandler}
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">I agree to the terms and condition of <span className="textColor">Privacy and Policy</span></label>
               </div>
            </form>
         </div>
      )
   }
}

export default Form;