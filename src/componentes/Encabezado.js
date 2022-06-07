import inicio from "./imagenes/paginainicio-min.png"

const Encabezado = () => {

    return (

      <div className="inicio d-flex p-0 mx-auto flex-column">
        <img className="imgInicio" src={inicio} alt=""/>
      </div>  
      
      );
}

export default Encabezado;


    