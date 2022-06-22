import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import CartContext  from './CartContext';
import {Link} from 'react-router-dom';

const CarWidget = () => {
  const {totalQuantity} = CartContext()

  return (
    
    <div target= "_black" className={`cart ${totalQuantity() === 0 ? "widgetHidden" : ""}`}>
      <Link to="/cart">
        <BsFillCartFill className= "cart"/> 
        <span className="badge badge-light" id="badge" data-action="cart-can">1</span>
      </Link>
    </div>
    
  )
}

export default CarWidget;



