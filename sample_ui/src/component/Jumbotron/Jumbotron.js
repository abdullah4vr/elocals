import React from 'react';
import SellerInfo from './SellerInfo/SellerInfo'
import Advert from './Advert/Advert'
import Search from  './Search/Search'
const jumbotron = (props) =>{
    return(
        <div className="jumbotron">
        <div className="container">
         <div style ={{marginLeft:10}} className= "row">
         <div className="col-lg-5">
            <div className="row">
            <SellerInfo seller={props.seller} />
            </div>
            <div className="row">
            <Search onChange={props.search}/>
            </div>
         </div> 
         <div className="col-lg-7" >
         <Advert/>
         </div>
         
         </div> 
         
         <ul className="nav navbar-nav navbar-center form-inline" 
         style={{topMargin : '50px',bottomMargin : '0px',textAlign : 'center'}}>

          <li><a href="#" onClick={()=>{props.categSearch('')}}>All</a></li>
          <li><a href="#" onClick={()=>{props.categSearch('ipad')}}>iPad</a></li>                  
          <li><a href="#" onClick={()=>{props.categSearch('mac')}}>Mac</a></li>
          <li><a href="#" onClick={()=>{props.categSearch('iphone')}}>iPhone</a></li>          
         </ul>
         
         </div>          
        </div>
    
    );
}

export default jumbotron;