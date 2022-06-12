import React from 'react';
import Item from './Item';

const ItemList = ( {items} ) =>{

    return(
        <div className="row">
            <h2>Nuestros Productos</h2>

            {
                items.map((items) => <Item key={items.id} items={items} />)
            }
        </div>

    )
}

export default ItemList;