//Bootstrap//
import 'bootstrap/dist/css/bootstrap.min.css';
//Scss//
import './sass/estilos.scss';
//Componentes//
import Navbar from './componentes/Navbar.js';
import Encabezado from './componentes/Encabezado.js';
import Productos from './componentes/Productos.js'
import Counter from './componentes/Counter.js';



function App() {
  return (
    
    <div className= "">
        <Navbar/>      
        <Encabezado/>
        <div class="col">
          <div class="row" id="cuerpo">
          </div>
        </div>
        <Counter/>
    </div>
    
  );
}

export default App;

