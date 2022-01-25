import React, { useState } from 'react';
import FoodCart from './FoodCart'
import Filter from './Filter'

function FoodContainer( { food, onAdd } ) {

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [foodSearch, setFoodSearch] = useState("");

  const foodItems = [...food]
    .filter((food) => {
      return categoryFilter === "All" || food.category === categoryFilter;
    })
    .filter((food) => {
      return food.name.toLowerCase().includes(foodSearch.toLowerCase());
    })
    .map((food) => {
      return <FoodCart key={food.id} food={food} onAdd={onAdd} />;
    });
    return (
        <main className="block col-2">
          <h2>Yummy Japanese Food</h2>
          {/* { food.map(item => <FoodCart key={item.id} item={item} onAdd={onAdd} /> )} */}
          <Filter 
          setCategoryFilter={setCategoryFilter}
          setFoodSearch={setFoodSearch}
          />

          {foodItems}
          <div className="row">
          
          </div>
        </main>
      );
    }




export default FoodContainer;