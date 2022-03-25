import React, { useEffect, useState } from 'react';
import Cart from '../Carts/Cart';
import './AllCart.css'
const AllCart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='main-diiv'>
            <div className='all-cart'>
                {
                    products.map(data => <Cart products={data}></Cart>)
                }
            </div>
            <div>
                <h1>display name</h1>
            </div>
        </div>
    );
};

export default AllCart;