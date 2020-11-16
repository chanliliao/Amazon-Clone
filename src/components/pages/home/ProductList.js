import React, { Component } from 'react';
import Products from '../home/Products';
import '../../../App.css';

class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        productName: 'IPhone 12',
        cost: 1099,
        rating: 4,
        imageURL:
          'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg',
      },
      {
        id: 2,
        productName: 'IPhone 11',
        cost: 899,
        rating: 4,
        imageURL:
          'https://images.macrumors.com/t/Iv79PYa5cd8bELUtWAmjo87I6uY=/800x0/filters:quality(90)/article-new/2019/09/iphone11progold-800x636.jpg?lossy',
      },
      {
        id: 3,
        productName: 'IPhone X',
        cost: 999,
        rating: 3,
        imageURL:
          'https://webobjects2.cdw.com/is/image/CDW/5277788?$product-main$',
      },
      {
        id: 4,
        productName: 'IPhone 8',
        cost: 799,
        rating: 2,
        imageURL:
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone8-spacegray?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541182730534',
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
