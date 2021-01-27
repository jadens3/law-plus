import './App.scss';
import Navigation from './components/Navigation.js';
import Product from './components/Product.js';
import About from './components/About.js';
import Shop from './components/Shop.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Product id='product'/>
      <About id='about'/>
      <Shop/>
    </BrowserRouter>
  );
}

export default App;
