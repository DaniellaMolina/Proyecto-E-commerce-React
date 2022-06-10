import CarWidget from "./CarWidget";


const Navbar = () => {

    return (
      <nav className="navbar navbar-expand-lg rounded" aria-label="Eleventh navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="logo-header" src="https://res.cloudinary.com/proyectoreactcoderhouse/image/upload/v1654815342/img/logo1_o0bffc.png"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Disabled</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown09">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
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