import React  from 'react';

const product = (props) => (
    <div
    style = {{marginTop : '50px'}} className='col-lg-4'>
      <strong> {props.product.name}</strong>
      
      <p>{props.product.desc}</p>
      <p>Price : <strong>{props.product.price}</strong></p>
      <button onClick={()=>{props.addToCart(props.product)}}>Add to Cart</button>
    </div>
);


export default product;