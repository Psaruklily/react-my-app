import React from 'react';

export const ProductItem = ({product: {id, title, price, description}}) => {
    return(
        <div>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <h5>{price}</h5>
            <h5>{description}</h5>
            <hr />
    </div>
    )
}