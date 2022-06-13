//Bootstrap//
import 'bootstrap/dist/css/bootstrap.min.css';
//Scss//
import './sass/estilos.scss';
//Componentes//
import Navbar from './componentes/Navbar';
import Navbar2 from './componentes/Navbar2.js';
import Encabezado from './componentes/Encabezado.js';
import ItemListContainer from './componentes/ItemListContainer.js';
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer.js';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Navbar2/>
      <Encabezado/>


      <Routes>  
        <Route path='/' element= {<ItemListContainer/>}/>
        <Route path='/categorias/:categoryId' element={ <ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={ <Navigate to={"/"} /> } />
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
