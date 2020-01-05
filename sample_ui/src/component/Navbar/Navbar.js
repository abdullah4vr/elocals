import React from 'react';
//import bootstrap from '../resource/bootstrap.css';
const navbar = (props)=>{
    return(
      <nav className ="navbar   ">
      <a className="navbar-brand"><img src={require('../../resource/logo.png')} 
      width="120" height="50" 
      alt=""/></a>
     <ul className="nav navbar-nav navbar-right form-inline">
                          
    
          <button className='btn btn-info'
          onClick={props.cartpress}
          style={{marginTop : '4px'}}>
          <span className="glyphicon glyphicon-shopping-cart"      
        ></span></button>
            
     </ul>
    </nav>
    ); 
}


export default navbar;