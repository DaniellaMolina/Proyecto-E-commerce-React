import React from "react";
//Bootstrap//
import 'bootstrap/dist/css/bootstrap.min.css';

const Item =({jsonpack})=>{
  return(
   
    <div className="card text-center">
      <div className="card-body">
        <img src={jsonpack.img} id="" className="card-img-top img-fluid" alt=""/>
        <h3 className="card-title">{jsonpack.nombre}</h3>
        <p className="card-text">${jsonpack.precio}</p>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button  id="agregar" type="button" className=" agregbtn btn-dark"> Agregar </button>
        </div>
      </div>
  </div>

)};

export default Item;