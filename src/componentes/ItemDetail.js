import  ItemCount from './ItemCount';

const ItemDetail =({jsonpack})=>{
    console.log(jsonpack);
    return(
        
        <div>
            <h1>Desafío: Detalle de producto</h1>
            <div className="card text-center" id="cards-productos">
                <div className="card-body">
                    <img src={jsonpack.thumbnail} id="" className="card-img-top img-fluid" alt=""/>
                    <h3 className="card-title text-secondary">{jsonpack.title}</h3>
                    <p className="card-text text-secondary">${jsonpack.price}</p>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <p>Cantidad{jsonpack.available_quantity}
                    <ItemCount product_name={jsonpack.title} stock={jsonpack.available_quantity} initial={1}/>
                    </p>
                    </div>
                </div>
            </div>
            
        </div>

    )
};



export default ItemDetail;