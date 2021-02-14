import './App.scss';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Team from './components/Team.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Home/>
      <Products/>
      <Team/>
    </BrowserRouter>
  );
}

export default App;
