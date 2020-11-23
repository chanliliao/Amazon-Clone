import './App.css';
import Navbar from './components/layout/Navbar';
import Subnav from './components/layout/Subnav';
import Home from './components/pages/home/Home';
import Checkout from './components/pages/checkout/Checkout';
import Payment from './components/pages/checkout/Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Subnav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
          <Route exact path='/payment'>
            <Payment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
