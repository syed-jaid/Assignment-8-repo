import React, { useEffect, useState } from 'react';
import Cart from '../Carts/Cart';
import './AllCart.css'
const AllCart = () => {
    const [products, setProducts] = useState([]);
    const [names, setnames] = useState([])
    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const AddToCart = (props) => {
        const { name } = props;
        const getname = name
        const newName = [...names, <br />, getname]
        if (names.length > 6) {
            alert('You can not add more then 5 watch')
        } else {
            setnames(newName)
        }

    }

    return (
        <div className='main-diiv'>
            <div className='all-cart'>
                {
                    products.map(data => <Cart key={data.id} AddToCart={AddToCart} products={data}></Cart>)
                }
            </div>
            <div className='display-name'>
                <h1>display name </h1>
                <h2 className='added-cart-name'>{names}</h2>
                <button className='display-rendom'>Reandom</button>
                <br />
                <button onClick={() => setnames([])} className='display-delets'>Clear All</button>
            </div>
        </div>
    );
};

export default AllCart;