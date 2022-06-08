import React from "react";
import {Button} from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";


const ItemCount=({min,max,onAdd,count})=>{

    console.log(count);
    return (

    <div className="botones ">
        <div className="cantidad">
            <Button className="menos btn-dark" onClick={min}>-</Button>
            <div>{count}</div>
            <Button className="mas btn-dark" onClick={max}>+</Button>
        </div>
        <div>
        <Button className="btn-dark agregar" disabled={count === 0} onClick={onAdd}>Agregar<BsFillCartFill className="cart-agregar"/></Button>
        </div>
    </div>
    )
};

export default ItemCount;