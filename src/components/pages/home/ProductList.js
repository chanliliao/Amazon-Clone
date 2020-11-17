import React, { Component } from 'react';
import Products from '../home/Products';
import '../../../App.css';

class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        productName: 'IPhone 12',
        cost: 999,
        rating: 4,
        imageURL:
          'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg',
      },
      {
        id: 2,
        productName: 'IPhone 12',
        cost: 999,
        rating: 4,
        imageURL:
          'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg',
      },
      {
        id: 3,
        productName: 'IPhone 12',
        cost: 999,
        rating: 4,
        imageURL:
          'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg',
      },
      {
        id: 4,
        productName: 'IPhone 12',
        cost: 999,
        rating: 4,
        imageURL:
          'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg',
      },
      {
        id: 5,
        productName: 'IPhone 12',
        cost: 999,
        rating: 4,
        imageURL:
          'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg',
      },
      {
        id: 6,
        productName: 'IPhone 12',
        cost: 999,
        rating: 4,
        imageURL:
          'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg',
      },
      {
        id: 7,
        productName: 'IPhone 12',
        cost: 999,
        rating: 4,
        imageURL:
          'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg',
      },
    ],
  };

  render() {
    return (
      <div className='grid'>
        {this.state.products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
