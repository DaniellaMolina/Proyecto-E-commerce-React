import  ItemCount from './ItemCount';

const ItemDetail =({item})=>{
    return(
        
        <div>
            <h1>Desafío: Detalle de producto</h1>
            <div className="card text-center" id="cards-productos">
                <div className="card-body">
                    <img src={item?.img} id="" className="card-img-top img-fluid" alt=""/>
                    <h3 className="card-title text-secondary">{item?.title}</h3>
                    <p className="card-text text-secondary">${item?.price}</p>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <p>Cantidad Disponible{item?.stock}
                    <ItemCount product_name={item?.title} stock={item?.stock} initial={1}/>
                    </p>
                    </div>
                </div>
            </div>
            
        </div>

    )
};



export default ItemDetail;