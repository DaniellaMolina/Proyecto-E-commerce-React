import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/Navbar.js';
import Encabezado from './componentes/Encabezado.js';
import ItemListContainer from './componentes/ItemListContainer.js';
import './sass/estilos.scss';

function App() {
  return (
    
    <div className= "">
        <Navbar/>      
      <main role="main">
        <Encabezado/>
        <ItemListContainer/>
      </main>
    </div>
    
    
  );
}

export default App;

