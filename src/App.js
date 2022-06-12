//Bootstrap//
import 'bootstrap/dist/css/bootstrap.min.css';
//Scss//
import './sass/estilos.scss';
//Componentes//
import Navbar from './componentes/Navbar';
import Navbar2 from './componentes/Navbar2.js';
import Encabezado from './componentes/Encabezado.js';
import ItemListContainer from './componentes/ItemListContainer.js';
import {BrowserRouter,Routes} from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer.js';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Navbar2/>
      <Encabezado/>
 
      <Routes exact path="/" element={<ItemListContainer name="Escoger Producto a Comprar"/>}/>
      <Routes path="/categories/:categoryid" element={<ItemListContainer/>}/>
      <Routes className="d-flex col card" path="/categories" element={<ItemListContainer/>}/>
      <Routes path="/item/:itemid" element={<ItemDetailContainer/>}/>

    </BrowserRouter>
    
  );
}

export default App;

