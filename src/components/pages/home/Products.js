import React, { Component } from 'react';

class Products extends Component {
  render() {
    const { productName, cost, rating, imageURL } = this.props.product;

    return (
      <div className='products'>
        <div className='product-info'>
          <p>{productName}</p>
          <p className='product-cost'>
            <small>$</small>
            <strong>{cost}</strong>
          </p>
          <div className='product-rating'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>

        <img src={imageURL} alt='' />

        <button>Add to Basket</button>
      </div>
    );
  }
}

export default Products;
