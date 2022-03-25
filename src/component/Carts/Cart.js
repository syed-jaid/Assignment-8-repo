import React from 'react';
import './Carts.css'
const Cart = (props) => {
    const { name, balance, img } = props.products
    console.log(props)
    return (
        <div className='single-cart'>
            <img className='cart-img' src={img} alt="" />
            <div className='cart-info'>
                <h1>{name}</h1>
                <h2>price :{balance}</h2>
                <button className='cart-btn'>Add To Card</button>
            </div>

        </div>
    );
};

export default Cart;