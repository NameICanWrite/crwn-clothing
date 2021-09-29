import logo from './logo.svg';
import classes from './App.module.sass';
import HomePage from './pages/HomePage/HomePage';
import { Route, Switch } from 'react-router';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
