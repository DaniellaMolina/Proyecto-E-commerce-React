import CarWidget from "./CarWidget";


const Navbar = () => {

    return (
      <nav className="navbar navbar-expand-lg rounded" aria-label="Eleventh navbar example">
        <div className="container-fluid">
            <img className="logo-header" src="https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654815342/img/logo1_o0bffc.png" alt="logo"/>	 
          <div className="carrito">     
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          </div>    
          <div className="collapse navbar-collapse" id="primer-navbar">   
            <form role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <CarWidget/>
          </div>
        </div>
      </nav>
        
    );
}

export default Navbar;