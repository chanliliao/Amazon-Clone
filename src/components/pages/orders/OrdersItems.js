import React from 'react';
import { useStateValue } from '../../context/StateProvider';

function OrdersItems({ id, image, title, price, rating }) {
  const [{ tempOrder }, dispatch] = useStateValue();
  return (
    <div className='checkoutItems orderItems'>
      <img className='checkoutItems-img' src={image} alt='' />
      <div className='checkoutItems-info'>
        <p className='checkoutItems-title'>{title}</p>
        <p className='checkoutItems-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className='checkoutItems-rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
      </div>
    </div>
  );
}

export default OrdersItems;
