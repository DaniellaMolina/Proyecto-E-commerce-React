import React from 'react'
import PropTypes from "prop-types";


const ItemListContainer = (nombre, img, precio) => {
  return (
    <div className="card text-center" style="width: 15rem; margin:1rem;">
      <div className="card-body">
        <img src={img} id="" className="card-img-top img-fluid" alt=""/>
        <h2 className="card-title h3">{nombre}</h2>
        <p className="card-text">${precio}</p>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button  id="agregar${cake.id}" type="button" onclick="agregarCarrito" className=" agregbtn btn-dark"> Agregar </button>
        </div>
      </div>
  </div>
  )
}


ItemListContainer.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number,
  img: PropTypes.string
};
export default ItemListContainer;