import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import FoodContainer from './components/FoodContainer';
import Cart from './components/Cart';
import Foot from './components/Foot';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <FoodContainer />
        <Cart />
      </div>
      <Foot />
    </div>
  );
}

export default App;
