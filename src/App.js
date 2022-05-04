
import React,{Component, useState} from "react"
import "./index.css"
import Additems from "./components/Additems/Additems";
import Todoitems from "./components/Todoitems/Todoitems";


let itmes;
let storeditems =JSON.parse(localStorage.getItem("items"));

class App extends Component {
  

  deleteItem=(id)=>{
   
     itmes  = storeditems.filter((item)=>{
      
      return item.id !== id ;

});
localStorage.setItem("items",JSON.stringify(itmes))

window.location.reload(false);
}

render(){
  
    
  return (
   
    

  <div className="App container">
     
    <h1 className='title-center'>To do List</h1>
    <Todoitems  deleteItem={this.deleteItem} />
    <Additems />

   <div className="father"><h1 className="hudhaifa"> Hudahaifa</h1></div>
   </div>
   


     
    
  );
}
}
export default App;
