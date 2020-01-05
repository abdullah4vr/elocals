import React from 'react';


const filters =(props) =>
{
    
    return(
            <React.Fragment>
           <form>      
           <div className ='row'>
            <div className = 'col-lg-6'>
            <strong style={{width :'50px'}}>Filter</strong>
            </div>
            <div className = 'col'>
            <button type='reset'className="btn-default " onClick={props.clear}>
            Clear All
            </button>
            </div>
            </div>
            <div className ='row'>
            <div className = 'col-lg-6'>
            Laptop
            </div>
             <input type='checkbox' onChange={()=>{
                 props.onChange('laptop');
             }}/>
            </div>
            <div className ='row'>
            <div className = 'col-lg-6'>
            Mobile
            </div>
             <input type='checkbox' onChange={()=>{
                 props.onChange('mobile');
             }}/>
            </div>
            </form>
            </React.Fragment>
            );
}


export default filters;