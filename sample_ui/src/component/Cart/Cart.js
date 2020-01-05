import React from 'react';
import classes from './Cart.css';
import PurchaseProduct from './PurchaseProduct/PurchaseProduct';
const cart =(props) => {
   
    let purchaseProductList ='Cart is empty :(';
    let amount=null;
    let buy_button=null;
    if(props.purchaseList.length !== 0)
    {
        amount=( <strong>TOTAL AMOUNT : {props.amount}</strong>);
        buy_button=(<button className ='btn btn-success'
        onClick ={props.buy}>Buy Now</button>);
        console.log(props.purchaseList);
        purchaseProductList=props.purchaseList
        .map(igkey=>{
            console.log(igkey);
            return(
            <div className = 'row' key={igkey.key} 
            style={{backgroundColor : 'dark-grey'}}>
            <div className='col-lg-4'>
                <strong>Product : {igkey.name}</strong>
                </div>
            <div className ='col'>
            <button className='btn btn-small btn-danger'
            onClick={()=>{props.removeFromCart(igkey)}}>Remove Item</button>
            </div>
                <p>Category : {igkey.category}</p>
                <p>Type :{igkey.type} </p>
                <p>Price:<strong>{igkey.price}</strong></p>
            </div>)
            
        });
    }

   return(
   <div className = {classes.Cart} style={{alignItems:'center'}}>
        <h3>MY CART</h3>
          {purchaseProductList}
         {amount}
          <div className="row">
          <div className="col-lg-4">
          {buy_button}
           </div>
           <div className="col-lg-4">
           <button className ='btn btn-warning'
           onClick ={props.back}>Go Back</button>
           </div>
           </div>
    </div>
    
);}


export default cart;