import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './style.scss'

import { login } from '../../actions/authActions'

class Form extends Component {

   state = {
      username: '',
      password: '',
      error: {}
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

   submitHandler = event => {
      event.preventDefault()

      let { username, password } = this.state
      this.props.login({username, password}, this.props.history)
   }

   render() {
      let { username, password } = this.state

      return (
         <div className="container py-md-5">
         <h4 className="font-weight-bold mb-4">Sign In</h4>
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
                  onClick={this.submitHandler}
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

const mapStateToProps = state => ({
   auth: state.auth
})

export default connect(mapStateToProps, {login})(Form);