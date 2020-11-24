import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../context/StateProvider';
import CheckoutItems from '../checkout/CheckoutItems';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../context/reducer';
import axios from '../checkout/Axios';

function Payment() {
  const [{ basket }] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace('/orders');
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.messsage : '');
  };

  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        <div className='payment-address'>
          <div className='payment-title'>
            <h3>Shipping Address</h3>
          </div>
          <div className='payment-body'>
            <p>bob123@gmail.com</p>
            <p>1546 Steuber Spring</p>
            <p>Lost Angels, CA</p>
          </div>
        </div>
        <div className='payment-method'>
          <div className='payment-title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment-body'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment-priceContainer'>
                <CurrencyFormat
                  renderText={(value) => <h3>OrderTotal: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button
                  className='btn'
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
        <div className='payment-items'>
          <div className='payment-title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment-body'>
            {basket.map((item) => (
              <CheckoutItems
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
