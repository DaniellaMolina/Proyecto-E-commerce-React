import React from 'react'
import { BsFillCartFill } from "react-icons/bs";


const CarWidget = () => {
  return (
    
    <div className = "shopping-cart" target= "_black"> <BsFillCartFill className= "cart"/> 
    <span className="badge badge-light" id="badge" data-action="cart-can">1</span>
    </div>
    
  
  )
}

export default CarWidget;



