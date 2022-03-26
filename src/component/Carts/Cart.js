import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Carts.css'
const Cart = (props) => {
    const { name, balance, img } = props.products;
    return (
        <div className='single-cart'>
            <img className='cart-img' src={img} alt="" />
            <div className='cart-info'>
                <h1>{name}</h1>
                <h2>price :{balance}</h2>
                <button onClick={() => props.AddToCart(props.products)} className='cart-btn'>ADD TO CARD <FontAwesomeIcon icon={faShoppingBag} /></button>
            </div>

        </div>
    );
};

export default Cart;