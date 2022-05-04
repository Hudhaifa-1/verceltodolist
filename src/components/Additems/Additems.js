

import React, { Component } from 'react'
export default class Additems extends Component {

  state={
    name:'',
    time:'',
    id:Math.random()
  }
  
  render() {
    // update state members
    const updateState =(e)=>{
  
      this.setState({
      [e.target.id]: e.target.value,
        
       })
     }

     // Send members to main App
     const handelsubmit =(e)=>{
   
       if(this.state.name==='' || this.state.time===''){
         alert("Pleas fill the content!")
       }else{

       if( localStorage.getItem("items") === null){
         localStorage.setItem("items",JSON.stringify([]))
        
         localStorage.setItem("items",JSON.stringify([this.state]))
       }else{
        let getedstor = JSON.parse(localStorage.getItem('items'))
        localStorage.setItem("items",JSON.stringify([...getedstor ,this.state]))
        
       }
      
       }
     }
    return (
      
  <div>
    <form onSubmit={handelsubmit} autoComplete="off">

      <input  type="text" onChange={updateState} id="name" value={this.state.name} placeholder="Enter the task name .."/>
      <input type="time" onChange={updateState}  id="time" value={this.state.time} placeholder="Enter the time requered .."/>
      <input type="submit" value="Add" /> 

    </form>
  </div>
      
      
    )
  }
}

