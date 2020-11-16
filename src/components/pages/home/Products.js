import React, { Component } from 'react';

class Products extends Component {
  render() {
    const { imageURL } = this.props.product;

    return (
      <div className='products'>
        <img src={imageURL} alt='' />
      </div>
    );
  }
}

export default Products;
