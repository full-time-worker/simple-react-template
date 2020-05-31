import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './style.scss'

import { register } from '../../actions/authActions'

class Form extends Component {

   state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: {},
      isAgree: false
   }

   static getDerivedStateFromProps(nextProps, prevState) {
      if(JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)) {
        return{
          error: nextProps.auth.error,
        }
      }
      return null
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

   submitHandler = event => {
      event.preventDefault()
      // if(!this.state.isAgree) {
      //    // this.setState(prev => ({ error: {
      //    //    "agreeError": 'You have to agree with our terms & conditions'
      //    // }}))
      //    console.log('its worked')
      // } else {
      //    let { username, firstName, lastName, email, password, confirmPassword } = this.state
      //    this.props.register({ username, firstName, lastName, email, password, confirmPassword }, this.props.history)
      // }

      let { username, firstName, lastName, email, password, confirmPassword } = this.state
         this.props.register({ username, firstName, lastName, email, password, confirmPassword }, this.props.history)
   }

   render() {
      let { username, firstName, lastName, email, password, confirmPassword } = this.state

      return (
         <div className="container py-md-5">
         <h4 className="font-weight-bold mb-4">Sign Up</h4>
         <form>
               <div className="py-2">
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
               <div className="py-2">
                  <label htmlFor="firstName" className="text-muted">First name</label>
                  <input 
                     type="text" 
                     name="firstName" 
                     id="firstName"
                     value={firstName}
                     onChange={this.changeHandler}
                     className="form-control"
                     placeholder="Enter first name" 
                  />
               </div>
               <div className="py-2">
                  <label htmlFor="lastName" className="text-muted">Last name</label>
                  <input 
                     type="text" 
                     name="lastName" 
                     id="lastName"
                     value={lastName}
                     onChange={this.changeHandler}
                     className="form-control"
                     placeholder="Enter last name" 
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
                     type="password" 
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
                  onClick={this.submitHandler}
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

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {register})(Form);