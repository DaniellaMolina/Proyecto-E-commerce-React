import React from "react";
//Bootstrap//
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillCartFill } from "react-icons/bs";

const Item =({jsonpack})=>{
  return(
   
    <div className="card text-center" id="cards-productos">
      <div className="card-body">
        <img src={jsonpack.img} id="" className="card-img-top img-fluid" alt=""/>
        <h3 className="card-title text-secondary">{jsonpack.nombre}</h3>
        <p className="card-text text-secondary">${jsonpack.precio}</p>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button  id="agregar" type="button" className=" agregbtn btn-dark"> Agregar <BsFillCartFill className= "cart-agregar"/> </button>
        </div>
      </div>
  </div>

)};

export default Item;