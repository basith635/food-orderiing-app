import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

const App = () =>
{
  const [ showCart, setShowCart ] = useState( false );
  const showCartHandler = () =>
  {
    setShowCart( true );
  };
  const hideCartHandler = () =>
  {
    setShowCart( false );
  };
  return (
    <CartProvider>
      { showCart && <Cart onClose={ hideCartHandler } /> }
      <Header onShowCart={ showCartHandler } />
      <section>
        <Meals />
      </section>
      <Footer />
    </CartProvider>
  );
}
export default App;


