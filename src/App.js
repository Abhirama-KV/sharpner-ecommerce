import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Fragment } from 'react';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import CartContextProvider from './components/store/CartContextProvider';
import Cart from './components/Cart';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Login from './components/LogIn';

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleShow = () => {
    setShowCart(!showCart)
  }

  const MainPage = ()=>{
    return (
      <div><Header show={toggleShow}/><Outlet /><Footer /></div>
    )
  }

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
      children: [
        {
          path:'/',
          element:<Body />
        },
        {
        path: '/home',
        element: <Home />
      }, {
        path: '/about',
        element: <About />
      },
      {
        path:'/login',
        element:<Login />
      }
    ]
    },

  ])

  return (


    <RouterProvider router={appRouter} >
      <CartContextProvider>
        
        {showCart && <Cart />}

      </CartContextProvider>
    </RouterProvider>

    


  );
}

export default App;
