import React,{Component} from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Jumbotron from './component/Jumbotron/Jumbotron';
import Grid from './component/Grid/Grid';
import Cart from './component/Cart/Cart';

class App extends Component{
  state ={
    seller : {name : 'Rajdeep Telecom',rating : 4.8},
    search : '',
    products :[
      {
      key : '6543521sadx',
      name : 'iphone 7',
      image : './resource/products/iphone7.jpeg',
      type : 'iphone',
      category : 'mobile',
      desc: '6.5 in screen 35 mp camera 6000 mah battery 6gb Ram',
      price : 27000},
      {
      key : '6543521sadz',
      name : 'hp notebook',
      image : './resource/products/hpnotebook.jpeg',
      type : 'hp',
      category : 'laptop',
      desc: '6.5 in screen 35 mp camera 6000 mah battery 6gb Ram',
      price : 77000},
      {
        key : '654352lkjaadx',
      name : 'OnePlus 7',
      image : './resource/products/oneplus7.jpeg',
      type : 'OnePlus',
      category : 'mobile',
      desc: '6.5 in screen 35 mp camera 6000 mah battery 6gb Ram',
      price : 17000},
      {
      key : '654ht21sadx',
      name : 'ipad 8',
      image : './resource/products/ipad8.jpeg',
      type : 'ipad',
      category : 'mobile',
      desc: '6.5 in screen 35 mp camera 6000 mah battery 6gb Ram',
      price : 127000},

    ],
    show : {
      laptop : false,
      mobile : false,
      all : true
    },

    orderedList : [],
    showCart : false,
    amount : 0
  }

///////////////////////////////////////////////////////////


categSearchHandler=(category)=>{
  this.setState({search:category});
}


searchHandler =(evt) =>
{
   let searchString = evt.target.value;
   console.log('Search string');
   console.log(searchString);
   this.setState({search : searchString});
}


buyHandler =() =>{
  this.setState({orderedList:[],showCart : false,amount : 0});
}

backHandler= () =>{
  this.setState({showCart :false});
}

removeFromCartHandler=(product)=>{
let orderdList=this.state.orderedList;
for(let i=0;i<orderdList.length;i++)
{
  if(product.key === orderdList[i].key)
  {
    orderdList.splice(i,1);
    break;
  }
}
let amt=this.state.amount-product.price;
this.setState({orderedList:orderdList,amount : amt})
};

filterHandler = (item) =>{
  console.log('hii');
let newshow = this.state.show;
newshow[item]=!newshow[item];
newshow.all=false;

if(!newshow['laptop'] && !newshow['mobile'])
    {newshow.all=true;
      console.log('hello');
    }
  this.setState({show :newshow});
  console.log(newshow);
  console.log(this.state.show);
}


clearAllHandler= () =>{
 let newshow = {
   'laptop' : false,
   'mobile' : false,
   'all'    : true
 }
 this.setState({show : newshow});
}


cartClickHandler = () =>{
  this.setState({showCart : true});
}



addToCartHandler = (product) =>{
  let orderdList = this.state.orderedList;
  orderdList.push(product);
  let amt = this.state.amount;
  amt=amt+product.price;
  this.setState({orderedList : orderdList,amount : amt});
}

/////////////////////////////////////////////////////////////////















  
  render(){
    
    let fprod=[];
    
    if(this.state.show.all)
       {fprod=[...this.state.products];
        //console.log(fprod);
       let fprod1=[];
       fprod.map((arr)=>{
        let str =arr.name+' '+arr.desc+' '+arr.type+' '+arr.category;
        console.log(str);
        console.log(this.state.search);
          if(str.includes(this.state.search))
               {
                 //console.log('kiholo');
                 return fprod1.push(arr);}
       });
       fprod=[...fprod1];
      }
       else{
         for(let key in this.state.products)
         {
          let str =this.state.products[key].name+' '+
          this.state.products[key].desc+' '+
          this.state.products[key].type+' '+
          this.state.products[key].category;
           //console.log(this.state.products[key].category);
           //console.log(this.state.show[this.state.products[key].category]);
           if(this.state.show[this.state.products[key].category] && str.includes(this.state.search))
                 fprod.push(this.state.products[key]);
         }
       }
    

       let cart =null;
       if(this.state.showCart)
       {
         cart=<Cart 
         purchaseList={this.state.orderedList}
         amount ={this.state.amount}
         buy={this.buyHandler}
         back={this.backHandler}
         removeFromCart={this.removeFromCartHandler}/>;
       }








  return (
    <div className="App container">
     <Navbar cartpress={this.cartClickHandler}/>
     <Jumbotron seller={this.state.seller} 
     search={this.searchHandler}
     categSearch={this.categSearchHandler}/>
     {cart}
     <Grid products = {fprod} 
     onChange={this.filterHandler} 
     clear={this.clearAllHandler}
     addToCart={this.addToCartHandler}/>
    </div>
  );
}
}

export default App;
