import React  from 'react';

const product = (props) => (
    <div className='col-lg-4'>
      <strong> {props.product.name}</strong>
      <p>{props.product.desc}</p>
    </div>
);


export default product;