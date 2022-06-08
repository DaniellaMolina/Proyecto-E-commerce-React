import React, {useState,useEffect} from 'react';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {

    const[productos,setProductos]=useState()
    useEffect(()=>{

    setTimeout(()=>{
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=baserevlon&limit=1")
            .then(response=>response.json())
            .then(data=>setProductos(data.results));
        },2000)



    },[]);


    return (

    <div>

        {
          productos &&  productos.map(item=>

            <ItemDetail key={item.id} jsonpack={item} />

        )}
    </div>

   )
}

export default ItemDetailContainer;