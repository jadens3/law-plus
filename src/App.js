import './App.scss';
import Navigation from './components/Navigation.js';
import HomePage from './components/HomePage.js';
import TeamPage from './components/TeamPage.js';
import FlashcardsPage from './components/FlashcardsPage.js';
import BookPage from './components/BookPage.js';
import Footer from './components/Footer.js';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Switch>
        <Route path='/' exact><HomePage /></Route>
        <Route path='/flashcards'><FlashcardsPage/></Route>
        <Route path='/book'><BookPage/></Route>
        <Route path='/team'><TeamPage /></Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
