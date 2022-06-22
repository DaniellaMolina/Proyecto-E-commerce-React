import CartContext from './CartContext';
import { useState, useContext} from "react";
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail =({item})=>{
    const {addItem, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () =>{

        if (cantidad === 0) return

        const itemToCart = {
            ...item,
            cantidad
        }
        addItem(itemToCart) 
    }

    if (item) {
        
        return(
        
            <div className="itemDetail container my-5">
            <img className="imgDetail" alt={item.nombre} src={item.img} />
        
            <div className="dataPrd">
                <h2>{item.nombre}</h2>
                <p className="itemDescr">{item.descrip}</p>
                <strong className="prodcPrecio">${item.precio}</strong>

                <div className="precioItem">
                    {
                        isInCart(item.id)
                        ? <Link to={"/cart"}><button className="btn btn-success">Finalizar mi compra</button></Link>
                        :
                        <ItemCount
                        max={item.stock}
                        counter = {cantidad}
                        setCounter={setCantidad}
                        handleAgregar ={handleAgregar}
                        />
                    }          
                </div>
            </div>
        </div>

    );

    }

    else {
        return(<></>);
    }
};

export default ItemDetail;
