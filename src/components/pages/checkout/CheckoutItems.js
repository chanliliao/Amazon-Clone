import React from 'react';
import { useStateValue } from '../../context/StateProvider';

function CheckoutItems({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeToBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className='checkoutItems'>
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
        <button onClick={removeToBasket} className='btn'>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutItems;
