import ItemList from './ItemList.js';
import jsonpack from './data.json';
import React, {useState} from 'react';
import { useParams } from "react-router-dom";




const ItemListContainer = ({name}) => {
    const {categoryid}=useParams();


    const[cat]=useState(categoryid);
        const[item,setItems]=useState([])
        const call = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(jsonpack)
    
    
            },2000)
        })
    
        call.then(response=> {
            setItems(response)
        })

        console.log(cat);

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
