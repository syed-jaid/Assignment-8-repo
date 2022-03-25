import React, { useEffect, useState } from 'react';
import Cart from '../Carts/Cart';
import './AllCart.css'
const AllCart = () => {
    const [products, setProducts] = useState([]);
    const [names, setnames] = useState([])
    const [randomnames, setnamesRandom] = useState([])
    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const AddToCart = (props) => {
        const { name } = props;
        const getname = name
        const newName = [...names, <br />, getname]
        setnames(newName)
        setnamesRandom([])
    }
    const RandomName = () => {
        const Allnames = names;
        setnamesRandom(Allnames)
        const reandoms = Math.round(Math.random() * 10)
        if (reandoms === 1 || reandoms === 3 || reandoms === 5 || reandoms === 7) {
            setnamesRandom(Allnames[reandoms])
            setnames([])
        } else {
            setnamesRandom(Allnames[1])
            setnames([])
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
                <h2 className='added-cart-name'>{randomnames}</h2>
                <button onClick={RandomName} className='display-rendom'>Reandom</button>
                <br />
                <button onClick={() => setnames([])} className='display-delets'>Clear All</button>
            </div>
        </div>
    );
};

export default AllCart;