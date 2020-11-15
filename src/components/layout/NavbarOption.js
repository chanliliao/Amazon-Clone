import React from 'react';
import '../../App.css';

function NavbarOption({ title, sub }) {
  return (
    <div className='navbar-options'>
      <span className='title'>{title}</span>
      <span className='sub'>{sub}</span>
    </div>
  );
}

export default NavbarOption;
