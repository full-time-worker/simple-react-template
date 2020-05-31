import React, { Component } from 'react'

class Navbar extends Component {

    state = {
        home: false,
        userWorkArea: false,
        setting: false,
        administration: false,
        imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        logoUrl: 'https://www.pngarts.com/files/3/Jaguar-Logo-PNG-Download-Image.png'
    }

    componentDidMount(){
        let { pathname } = window.location
        if(pathname == '/') {
            this.setState(prev => ({
                home: true
            }))
        }else if(pathname == '/user-work-area') {
            this.setState(prev => ({
                userWorkArea: true
            }))
        }else if(pathname == '/setting') {
            this.setState(prev => ({
                setting: true
            }))
        }else if(pathname == '/administration') {
            this.setState(prev => ({
                administration: true
            }))
        }
        
    }

    render() {

      let { home, userWorkArea, setting, administration, imageUrl, logoUrl } = this.state

      return (
         <div className="">
            <nav className="navbar container-fluid navbar-expand-lg navbar-light px-5 py-3">
               <a class="navbar-brand" href="#">
                     <img src={logoUrl} width="110" height="50" alt="Logo"/>
               </a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav ml-auto">
                        <li className={home ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className={userWorkArea ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/user-work-area">User work area</a>
                        </li>
                        <li className={setting ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/setting">Setting</a>
                        </li>
                        <li className={administration ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/administration">Administration</a>
                        </li>
                        { this.props.isAuthenticated ? 
                           <li className="nav-item">
                              <div class="dropdown">
                                 <span class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img 
                                    src={imageUrl} 
                                    className="rounded-circle" 
                                    alt="Profile Pic" 
                                    height="40"
                                    width="40"
                                    />
                                 </span>
                                 <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Logout</a>
                                    <a class="dropdown-item" href="#">Reset Yaml</a>
                                 </div>
                              </div>
                           </li> : 
                           <li className="nav-item">
                              <a 
                                 type="button" 
                                 className="btn btnColor radius px-md-4 py-2 px-5 nav-link mt-3 mt-lg-0 text-light"
                                 href="/registration"
                              >Sign Up</a>
                           </li>
                        }
                     </ul>
               </div>
            </nav>
         </div>
      )
   }
}

export default Navbar;