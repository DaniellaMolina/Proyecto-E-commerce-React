import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CountContainer from './CountContainer';

const Item =({jsonpack})=>{
  return(
   
    <div className="card text-center" id="cards-productos">
      <div className="card-body">
        <img src={jsonpack.img} id="" className="card-img-top img-fluid" alt=""/>
        <h3 className="card-title text-secondary">{jsonpack.nombre}</h3>
        <p className="card-text text-secondary">${jsonpack.precio}</p>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <CountContainer/>
        </div>
      </div>
  </div>

)};

export default Item;