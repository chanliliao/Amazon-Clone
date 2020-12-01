import React, { Component } from 'react';
import { useStateValue } from '../../context/StateProvider';

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    dispatch({
      type: 'ADD_TO_TEMP',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-cost'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product-rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img
        src='https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg'
        alt=''
      />

      <button onClick={addToBasket} className='btn'>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;

{
}
