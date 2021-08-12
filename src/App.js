import React from 'react';
import {useSelector} from 'react-redux';
import { Header } from './components/header';


export default function App() {

    const {cart, wishlist, products} = useSelector(({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
        cart, wishlist, products
    }));

    return(
        <div>
            <Header />
            <h2>Redux {cart.length}, {wishlist.length}, {products.length }</h2>
        </div>
    )
}