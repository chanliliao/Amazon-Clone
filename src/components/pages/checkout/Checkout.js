import React from 'react';
import Subtotal from '../checkout/Subtotal';
import CheckoutItems from '../checkout/CheckoutItems';
import { useStateValue } from '../../context/StateProvider';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div>
      <div className='checkout'>
        <div className='checkout-left'>
          <div className='checkout-ads'>
            <img
              src='https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2019/Maple/Maple_144x80_B06W5SBSL7._CB438699196_.jpg'
              alt=''
            />
            <div>
              <h2>Get a$15 credit</h2>
              <p>
                when you purchase $50 or more in Amazon Gift Cards (restrictions
                apply)
              </p>
            </div>
            <button>Learn More</button>
          </div>
          <div className='cart'>
            <h2 className='cart-title'>Shopping Cart</h2>

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
        <div className='checkout-right'>
          <div className='subtotal'>
            <Subtotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
