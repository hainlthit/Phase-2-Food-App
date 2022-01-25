import './App.css';
import Header from "./components/Header";
import FoodContainer from './components/FoodContainer';
import Cart from './components/Cart';
import Foot from './components/Foot';
import React, { useState, useEffect } from 'react'

function App() {

  const [food, setFood] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/foods')
    .then(r => r.json())
    .then(data => setFood(data))
  }, [])
  
  return (
    <div className="App">
      <Header />
      <div className="row">
        <FoodContainer food={food} />
        <Cart />
      </div>
      <Foot />
    </div>
  );
}

export default App;
