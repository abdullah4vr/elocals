import React from 'react';
import Product from './Product/Product'

const products=(props) =>{
    let product_list = props.products.map(i=>(
        
        <Product
         key={i.key}
          product={i} 
          addToCart={props.addToCart}
         />

    ));
    return product_list; 
}

export default products;