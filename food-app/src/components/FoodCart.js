import React from 'react';

function FoodCart({ item }) {
    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.image} height="200px" width="200px"></img>
            <p>${item.price}</p>
            <p>{item.category}</p>
            
          
        </div>
    );
  }




export default FoodCart;