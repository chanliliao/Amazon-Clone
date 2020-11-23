import React from 'react';
import '../../App.css';
import NavbarOption from './NavbarOption';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';

function Navbar() {
  const [{ basket }] = useStateValue();
  return (
    <div className='navbar'>
      <Link to='/'>
        <img
          className='logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='amazon logo'
        />
      </Link>

      <NavbarOption title={'Hello'} sub={'Select your address'} />
      <div className='search'>
        <input className='search-input' type='text' />
        <FaSearch className='search-icon' size='1rem' />
      </div>
      <NavbarOption title={'Hello'} sub={'Sign In'} />
      <NavbarOption title={'Return'} sub={'&Order'} />
      <Link to='/checkout'>
        <div className='basket'>
          <FaShoppingBasket color='white' size='2rem' />
          <div className='basket-count'>
            <h2>{basket?.length}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
