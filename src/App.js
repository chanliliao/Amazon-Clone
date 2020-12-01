import './App.css';
import Navbar from './components/layout/Navbar';
import Subnav from './components/layout/Subnav';
import Home from './components/pages/home/Home';
import Checkout from './components/pages/checkout/Checkout';
import Payment from './components/pages/checkout/Payment';
import Orders from './components/pages/orders/Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

//public key
const promise = loadStripe(
  'pk_test_51HqV5VHXlknomZJBZGuQTVonYtd4Y77cXt4Q4McD2IKx1AeU5I5a2rGtYgrK8qUUIUQsm6T0J3lo3IP63Qxrdnkc00adKoVqnT'
);

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
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path='/orders'>
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
