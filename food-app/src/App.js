import './App.css';
import Header from "./components/Header";
import FoodContainer from './components/FoodContainer';
import Cart from './components/Cart';
import Foot from './components/Foot';
import React, { useState, useEffect } from 'react'

function App() {

  const [food, setFood] = useState([])
  const [cart, setCart] = useState([])

  const onAdd = (food) => {
    const clicked = cart.find((x) => x.id === food.id);
    if (clicked) {
      setCart(
        cart.map((x) =>
          x.id === food.id ? { ...clicked, qty: clicked.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...food, qty: 1 }]);
    }
  };

  const onRemove = (food) => {
    const clicked = cart.find((x) => x.id === food.id);
    if (clicked.qty === 1) {
      setCart(cart.filter((x) => x.id !== food.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === food.id ? { ...clicked, qty: clicked.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/foods')
    .then(r => r.json())
    .then(data => setFood(data))
  }, [])

  return (
    <div className="App">
      <Header countCart={cart.length}></Header>
      <div className="row">
        <FoodContainer 
        onAdd={onAdd} 
        food={food} 
        />
        <Cart 
        cart={cart} 
        onAdd={onAdd} 
        onRemove={onRemove} 
        />
      </div>
      <Foot />
    </div>
  );
}

export default App;
