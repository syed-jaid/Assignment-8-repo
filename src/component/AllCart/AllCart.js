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

        setnamesRandom([])
        if (names.length > 6) {
            alert('You can not add more then 4 product')
        }
        else {
            setnames(newName)
        }
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
    const ClearAll = () => {
        setnames([]);
        setnamesRandom([]);
    }
    return (
        <div className='main-diiv'>
            <div className='all-cart'>
                {
                    products.map(data => <Cart AddToCart={AddToCart} key={data.id} products={data}></Cart>)
                }
            </div>
            <div className='display-name'>
                <h1>Selected</h1>
                <h2 className='added-cart-name' >{names}</h2>
                <h2 className='added-cart-names'>{randomnames}</h2>
                <button onClick={RandomName} className='display-rendom'>CHOOSE 1 FOR ME</button>
                <br />
                <button onClick={ClearAll} className='display-delets'>Clear All</button>
            </div>
        </div>
    );
};

export default AllCart;