import logo from './logo.svg';
import classes from './App.module.sass';
import HomePage from './pages/HomePage/HomePage';
import { Route, Switch } from 'react-router';
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
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
