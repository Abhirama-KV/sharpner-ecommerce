import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Fragment } from 'react';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import CartContextProvider from './components/store/CartContextProvider';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [showCart,setShowCart] = useState(false);

  const toggleShow = ()=>{
    setShowCart(!showCart)
  }
  
  return (
    <Fragment>
      <CartContextProvider>
        <Header show={toggleShow}/>
        {showCart && <Cart />}
        <Body />
        <Footer />

      </CartContextProvider>
    </Fragment>

  );
}

export default App;
