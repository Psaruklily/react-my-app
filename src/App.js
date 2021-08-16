import React, {useEffect,  useCallback} from 'react';
import {useSelector} from 'react-redux';
import { Header } from './components/header';
import { ProductList } from './components/product-list';
import {useServices} from './services';

export default function App() {

    const {cart, wishlist, products} = useSelector(({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
        cart, wishlist, products
    }));

    const {productService} = useServices();

    const fetchData = useCallback(async () => {
        const response = await productService.getProducts();
        const json = await response.json();
        console.log(json); 
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div>
            <Header />
            <ProductList />
            <h2>Redux {cart.length}, {wishlist.length}, {products.length }</h2>
        </div>
    )
}