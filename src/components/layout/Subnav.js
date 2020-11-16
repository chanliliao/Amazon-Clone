import React from 'react';
import '../../App.css';
import { GiHamburgerMenu } from 'react-icons/gi';

function Subnav() {
  return (
    <div>
      <div className='subnav'>
        <button>
          <GiHamburgerMenu size='1.5rem' />
          <span>All</span>
        </button>
        <button>Holiday Deals</button>
        <button>Gift Cards</button>
        <button>Subscribe & Save</button>
        <button>Customer Service</button>
        <button>Best Sellers</button>
        <button>AmazonBasics</button>
        <button>Prime Videos</button>
      </div>
    </div>
  );
}

export default Subnav;
