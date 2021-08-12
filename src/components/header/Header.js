import React from 'react';

export const Header = (props) => {
    return (
        <header className='d-flex justify-between align-center'>
            <h2>Hello from header</h2>
            <div className='d-flex justify-between'>
                <div className='mx-10'>wishlist:</div>
                <div className='mx-10'>cart:</div>
            </div>
        </header>
    )
}