import React from 'react';
import '../../../App.css';
import Product from '../home/Product';

function Home() {
  return (
    <div className='home'>
      <div className='hero'>
        <img
          className='hero-img'
          src='https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/Events-Holiday-SeasonalStores/Thanksgiving/F3VX-2621-Fresh_F3_US_EN_GW_TallHero_06_browser_1x._CB417380239_.jpg'
          alt=''
        />
        <div className='product-row'>
          <Product
            id='1'
            title='Iphone 12'
            price={999}
            image='https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/Events-Holiday-SeasonalStores/Thanksgiving/F3VX-2621-Fresh_F3_US_EN_GW_TallHero_06_browser_1x._CB417380239_.jpg'
            rating={5}
          />
          <Product
            id='2'
            title='Iphone 12'
            price={999}
            image='https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/Events-Holiday-SeasonalStores/Thanksgiving/F3VX-2621-Fresh_F3_US_EN_GW_TallHero_06_browser_1x._CB417380239_.jpg'
            rating={5}
          />
        </div>
        <div className='product-row'>
          <Product
            id='3'
            title='Iphone 12'
            price={999}
            image='https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/Events-Holiday-SeasonalStores/Thanksgiving/F3VX-2621-Fresh_F3_US_EN_GW_TallHero_06_browser_1x._CB417380239_.jpg'
            rating={5}
          />
          <Product
            id='4'
            title='Iphone 12'
            price={999}
            image='https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/Events-Holiday-SeasonalStores/Thanksgiving/F3VX-2621-Fresh_F3_US_EN_GW_TallHero_06_browser_1x._CB417380239_.jpg'
            rating={5}
          />
          <Product
            id='5'
            title='Iphone 12'
            price={999}
            image='https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/Events-Holiday-SeasonalStores/Thanksgiving/F3VX-2621-Fresh_F3_US_EN_GW_TallHero_06_browser_1x._CB417380239_.jpg'
            rating={5}
          />
        </div>

        <div className='product-row'></div>
      </div>
    </div>
  );
}

export default Home;
