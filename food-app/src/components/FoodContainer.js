import React from 'react';
import FoodCart from './FoodCart'

function FoodContainer( { food } ) {
    return (
        <main className="block col-2">
          <h2>Yummy Japanese Food</h2>

          { food.map(item => <FoodCart key={item.id} item={item} /> )}
          <div className="row">
          </div>
        </main>
      );
    }




export default FoodContainer;