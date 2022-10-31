import Navbar from './components/Navbar';
import './App.css';
import React, { useState } from 'react';
import Amazon from './components/Amazon';
import Cart from './components/cart';


const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setcart] = useState([]);
  const handleClick = (item) => {
    setcart([...cart, item]);
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} />
      {show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} />}
    </React.Fragment>
  );
};

export default App;
