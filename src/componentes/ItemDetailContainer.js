import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import {PedirDatos} from './pedirDatos.js'
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId)
    console.log(item)
   
    useEffect(() =>{
        setLoading(true)

        PedirDatos()
            .then((resp)=> {
                setItem( resp.find((item) => item.id === Number(itemId) ) )
        })
        .catch( (error) =>{
            console.log("ERROR",error)
        })
        .finally( ()=>{
            setLoading(false)
        })
    }, [itemId])

    return(
        
        <section className="cardsContainer container my-5">

            {
                loading 
                ?   <Spinner animation="border" role="status" className="spiner">
                        <span className="visually-hidden"></span>
                    </Spinner> 

                    : <ItemDetail item={item}/>
            }
        </section>


    )

}

export default ItemDetailContainer;