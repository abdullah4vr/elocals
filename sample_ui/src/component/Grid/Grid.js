import React from 'react';
import Products from './Products/Products'
import Filters from './Filters/Filters'
const Grid = (props) => {
    
    
    return(
        <div className='container'>
        <div className='row'>
        <div className='col-lg-5'>
         <Filters onChange={props.onChange} clear={props.clear}/>
        </div>
        <div className='col-lg-7 justify-space-between'>
          <Products products={props.products} addToCart={props.addToCart}/>
        </div>
        </div>
        </div>

);}

export default Grid;