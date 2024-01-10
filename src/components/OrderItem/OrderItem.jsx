import React from 'react';

const OrderItem = ({icon, el}) => {
  return (
      <div className='order' key={el.id}>
        <div className='user'>
          {icon}
          <div className='user__name'>
            <p>{el.name}</p>
            <span>{el.name}</span>
          </div>
        </div>
        <h3>{el.price}</h3>
        <div className='button_wrap'>
          <button className={el.btn.class}>{el.btn.text}</button>
        </div>
      </div>
  );
};

export default OrderItem;