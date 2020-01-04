import React from 'react';
//import bootstrap from '../resource/bootstrap.css';
const navbar = (props)=>{
    return(
      <nav className ="navbar   ">
      <a className="navbar-brand"><img src={require('../../resource/logo.png')} 
      width="120" height="50" 
      alt=""/></a>
     <ul className="nav navbar-nav navbar-right form-inline">
                          
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/login">Log In</a></li>
            
     </ul>
    </nav>
    ); 
}


export default navbar;