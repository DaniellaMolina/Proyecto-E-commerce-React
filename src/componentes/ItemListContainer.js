import React from 'react'
import ItemList from './ItemList';
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {PedirDatos} from './pedirDatos.js'
import { Spinner } from "react-bootstrap"




const ItemListContainer = () => {
    
    const[items, setItems]=useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();
  

    useEffect(() => {
        setLoading(true)

        PedirDatos()
            .then((resp) => {
                if (!categoryId) {
                    setItems( resp )
                } else {
                    setItems( resp.filter((item) => item.categoryid === categoryId) )
                }
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])
        

    return (

      <div name="test">

        <div className="row justify-content-md-center cards">
            

            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :  <ItemList items={items}/>
            }
        </div>
      </div>
   );
}

export default ItemListContainer;
