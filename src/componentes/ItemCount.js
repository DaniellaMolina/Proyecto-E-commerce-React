import React from "react";
import {Button} from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";
import ItemDetailButton from "./ItemDetail"


const ItemCount=({min,max,onAdd,count,stock})=>{

    console.log("En item count:"+count);
    return (

        <div className="botones">
            <div className="cantidad">
                <Button className="menos btn-dark" onClick={min}>-</Button>
                <div>{count}</div>
                <Button className="mas btn-dark" onClick={max}>+</Button>
            </div>
            <div>
            <Button className="btn-dark agregar" disabled={count === 0} onClick={onAdd}>Agregar<BsFillCartFill className="cart-agregar"/></Button>
            <ItemDetailButton contador={count}/>
            </div>
        </div>
    )
};

export default ItemCount;