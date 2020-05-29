import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

class Form extends Component {

   state = {
      name: '',
      password: '',
      error: {}
   }

   changeHandler = event => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   render() {
      let { name, password } = this.state

      return (
         <div className="container py-md-5">
         <h4 className="font-weight-bold mb-4">Sign In</h4>
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
               <label htmlFor="password" className="text-muted">Password</label>
               <input 
                  type="password" 
                  name="password" 
                  id="password"
                  value={password}
                  onChange={this.changeHandler}
                  className="form-control"
                  placeholder="Enter Password" 
               />
               </div>
               <div className="align-right float-right py-2 text-right">
               <a href="#" className="h6">
                  Forgot password?
               </a>
               </div>
               <div className=" d-inline-block">
               <button 
                  type="button" 
                  className="btn btnColor1 font-weight-bold mr-2 px-lg-4 my-1"
               >Sign In</button>
               <a 
                  type="button" 
                  className="btn btnColor2 font-weight-bold px-lg-4  my-1"
                  href="/registration"
               >Sign Up</a>
               </div>
            </form>
         </div>
      )
   }
}

export default Form;