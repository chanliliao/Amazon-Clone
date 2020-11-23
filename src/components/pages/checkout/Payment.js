import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import CheckoutItems from '../checkout/CheckoutItems';
import { Link } from 'react-router-dom';

function Payment() {
  const [{ basket }] = useStateValue();

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
          <h3>Payment Method</h3>
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
