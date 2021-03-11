import './App.scss';
import Navigation from './components/Navigation.js';
import HomePage from './components/HomePage.js';
import TeamPage from './components/TeamPage.js';
import Footer from './components/Footer.js';
import UnderConstruction from './components/UnderConstruction';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Switch>
        <Route path='/' exact><HomePage /></Route>
        <Route path='/flashcards'><UnderConstruction/></Route>
        <Route path='/book'><UnderConstruction/></Route>
        <Route path='/team'><TeamPage /></Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
