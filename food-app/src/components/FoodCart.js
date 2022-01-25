import React from 'react';

function FoodCart({ item, onAdd }) {
    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.image} height="200px" width="200px" alt={item.name}/>
            <p>${item.price}</p>
            <button onClick={() => onAdd(item)} >Add to Cart</button>
        </div>
    );
  }




export default FoodCart;