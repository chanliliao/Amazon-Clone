import React from 'react';
import OrderItems from './OrdersItems';
import { useStateValue } from '../../context/StateProvider';

function Orders() {
  const [{ tempOrder }] = useStateValue();
  return (
    <div className='orders'>
      <div className='order-title'>
        <h1>Your Orders</h1>
      </div>
      <div className='order-items'>
        <h3 className='order-subtitle'>
          <p>Orders</p>
        </h3>
        {tempOrder.map((item) => (
          <OrderItems
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
