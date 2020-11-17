import React from 'react';
import '../../../App.css';
import ProductList from '../home/ProductList';

function Home() {
  return (
    <div className='home '>
      <div className='hero container'>
        <img
          className='hero-img'
          src='https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/Events-Holiday-SeasonalStores/Thanksgiving/F3VX-2621-Fresh_F3_US_EN_GW_TallHero_06_browser_1x._CB417380239_.jpg'
          alt=''
        />
      </div>
      <div className='product container'>
        <ProductList />
      </div>
    </div>
  );
}

export default Home;
