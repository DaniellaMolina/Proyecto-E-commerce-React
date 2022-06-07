import ItemList from './ItemList.js';
import Item from './Item.js';
import jsonpack from './data.json';
import React, {useState} from 'react';




const ItemListContainer = ({name}) => {
    const[item,setItems]=useState([])
    const call = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(jsonpack)
        },2000)
    })

    call.then(response=> {
        setItems(response)
    })



    return (

      <div name="test">

        <div className="row justify-content-md-center cards">
            {name}

            <ItemList items={item}/>
        </div>
      </div>
   );
};


export default ItemListContainer;
