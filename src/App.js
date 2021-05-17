import './App.scss';
import Navigation from './components/Navigation.js';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import FlashcardsPage from './components/FlashcardsPage.js';
import BookPage from './components/BookPage.js';
import Footer from './components/Footer.js';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <main>
        <Switch>
          <Route path='/' exact><HomePage id="home"/></Route>
          <Route path='/flashcards'><FlashcardsPage/></Route>
          <Route path='/book'><BookPage/></Route>
          <Route path='/about'><AboutPage /></Route>
        </Switch>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
