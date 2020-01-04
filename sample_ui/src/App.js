import React,{Component} from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Jumbotron from './component/Jumbotron/Jumbotron'
class App extends Component{
  state ={
    seller : {name : 'Rajdeep Telecom',rating : 4.8}
  }
  render(){
  return (
    <div className="App container">
     <Navbar/>
     <Jumbotron seller={this.state.seller}/>
     Grid
    </div>
  );
}
}

export default App;
