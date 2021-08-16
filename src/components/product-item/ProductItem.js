import React from 'react';

export const ProductItem = ({
    isAddedToWishlist, 
    onAddToCart,
    onAddToWishList, 
    product,
    product: {id, title, price, description}}) => {
    return(
        <div>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <h5>{price}</h5>
            <h5>{description}</h5>
            <button onClick={() => onAddToCart(product)}>add to cart</button>
            <button 
            style={{background: isAddedToWishlist ? 'red' : 'green'}}
            onClick={() => onAddToWishList(product)}>{isAddedToWishlist ? 'remove from wishlist' : 'add to wishlist'}</button>
            <hr />
    </div>
    )
}