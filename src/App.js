import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Fragment } from 'react';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
    
  );
}

export default App;
