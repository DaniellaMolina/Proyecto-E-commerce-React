import ItemCount from './CountContainer';

const ItemDetailButton =({contador})=>{
    
    console.log("Contador"+contador);
    const  onAdd=({e})=>{
    console.log("Estoy en onAdd ItemDetail y count:");
    document.getElementById("but1").style.display="block";
    document.getElementById("but2").style.display="none";
    alert("El producto seleccionado se agregó al carrito");
    }

    return(
        <>

        <button disabled={contador===0} id="but2" onClick={onAdd}>Agregar a carrito</button>

        </>
    );
};

const ItemDetail =({item})=>{
    console.log("Detalle de ItemDetail:",item);


    function Terminar(){
        window.location.href="/cart";
    }

    if (item) {
        
        return(
        
        <div>
            <h1>Detalle de producto</h1>
            <div className="card text-center" id="cards-productos">
                <div className="card-body">
                    <img src={item?.img} id="" className="card-img-top img-fluid" alt=""/>
                    <h3 className="card-title text-secondary">{item?.title}</h3>
                    <p className="card-text text-secondary">${item?.price}</p>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <p>Cantidad disponible:{item?.stock}
                    <ItemCount product_name={item?.title} stock={item?.stock} initial={1}/>
                    <button id="but1" style={{display:'none'}}  onClick={Terminar}>Terminar mi compra</button>
                    </p>
                    </div>
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
export {ItemDetailButton};