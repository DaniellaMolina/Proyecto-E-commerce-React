//Bootstrap//
import 'bootstrap/dist/css/bootstrap.min.css';
//Scss//
import './sass/estilos.scss';
//Componentes//
import Navbar from './componentes/Navbar.js';
import Encabezado from './componentes/Encabezado.js';
import ItemListContainer from './componentes/ItemListContainer.js';



function App() {
  return (
    
    <div className= "">
        <Navbar/>      
        <Encabezado/>
        
        <div className="d-flex col card">
          <ItemListContainer/>
        </div>
    </div>
    
  );
}

export default App;

