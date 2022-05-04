import React, { useState } from 'react';


function Todoitems(props) {

  const {items,deleteItem} = props;

  
  
  let storeddata = JSON.parse(localStorage.getItem("items"))
 
  return (
    
    
      <div className='List-item'  >
       
        <div> <span className='title name'>Task Name</span>
       <span className='title time' >Time required</span>
       <span className='title action ' >Action</span></div>
      {(storeddata !='') ? storeddata.map((i)=>
      <div key={i.id}>
        <span className=' name'>{i.name}</span > 
        <span className=' time'>{i.time}</span> 
        <span className='action icon' onClick={()=>deleteItem(i.id)}>&times; </span> </div>): <p>There is no items</p>}

        
        
      </div>
   
  )
}

export default  Todoitems;
