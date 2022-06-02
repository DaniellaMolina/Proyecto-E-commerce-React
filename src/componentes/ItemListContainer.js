import React from 'react'
import PropTypes from "prop-types";


const ItemListContainer = (nombre, img, precio) => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <img src={img} id="" className="card-img-top img-fluid" alt=""/>
        <h3 className="card-title">{nombre}</h3>
        <p className="card-text">${precio}</p>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button  id="agregar" type="button" className=" agregbtn btn-dark"> Agregar </button>
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