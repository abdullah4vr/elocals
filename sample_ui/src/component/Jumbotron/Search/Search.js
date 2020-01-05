import React from 'react';

//import classes from './Search.css'
const search =(props) =>{

       return(
        <div className="input-group mb-3" style ={{width :'60%'}}>
        <input type="text" className="form-control-static" 
        placeholder="Search Products" 
        aria-label="Recipient's username" 
        aria-describedby="basic-addon2"
        onChange={props.onChange}/>
        
        <button type="button" 
        className="btn btn-default btn-info 
        btn-sm btn-outline-secondary"
        style={{leftMargin : '0px',height : '39px'}}
        type='submit'
        onClick={props.onChange}
        >
         <span className="glyphicon glyphicon-search"      
        ></span> </button>        
      </div>
       
);
}
export default  search; 