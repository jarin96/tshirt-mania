import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
    const { handleAddToCart, tShirt } = props;
    const { name, picture, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p> {price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;