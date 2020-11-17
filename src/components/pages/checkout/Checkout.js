import React from 'react';

function Checkout() {
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
          </div>
        </div>
        <div className='checkout-right'>
          <div className='subtotal'>
            <h2>Subtotal ( 1 items): $14.00 </h2>
            <input type='box' /> This order contains a gift
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
