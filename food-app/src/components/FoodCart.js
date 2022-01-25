import React from 'react';

function FoodCart({ food, onAdd }) {
    return (
        <div>
            <h1>{food.name}</h1>
            <img src={food.image} height="200px" width="200px" alt={food.name}/>
            <p>${food.price}</p>
            <button onClick={() => onAdd(food)} >Add to Cart</button>
        </div>
    );
  }




export default FoodCart;