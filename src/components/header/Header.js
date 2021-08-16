import React from 'react';
import { useSelector } from 'react-redux';

export const Header = (props) => {
    const {cart, wishlist} = useSelector(({cart: {cart}, wishlist: {wishlist}}) => ({cart, wishlist}))
    return (
        <header className='d-flex justify-between align-center'>
            <h2>Hello from header</h2>
            <div className='d-flex justify-between'>
                <div className='mx-10'>wishlist: {cart.length}</div>
                <div className='mx-10'>cart: {wishlist.length}</div>
            </div>
        </header>
    )
}