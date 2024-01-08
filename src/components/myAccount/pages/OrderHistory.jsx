import React from 'react';
import { ReactComponent as Icon } from '../../../components/icons/Frame 48095518.svg';
import '../../../styles/components/OrderHistory.scss';
import OrderCalendar from '../../OrderCalendar';

const OrderHistory = () => {
  const orders = [
    {
      id: 1,
      name: 'Таалайбек к Элнура',
      number: '№SITE-13909',
      price: '24 262,05 сом ',
      btn: {
        text: 'Резерв не собирать',
        class: 'first',
      },
    },
    {
      id: 2,
      name: 'Таалайбек к Элнура',
      number: '№SITE-13909',
      price: '24 262,05 сом ',
      btn: {
        text: 'Подтвержден юг',
        class: 'second',
      },
    },
    {
      id: 3,
      name: 'Таалайбек к Элнура',
      number: '№SITE-13909',
      price: '24 262,05 сом ',
      btn: {
        text: 'Самовывоз',
        class: 'third',
      },
    },
    {
      id: 4,
      name: 'Таалайбек к Элнура',
      number: '№SITE-13909',
      price: '24 262,05 сом ',
      btn: {
        text: 'Резерв не собирать',
        class: 'first',
      },
    },
  ];

  return (
    <div className='orders_history'>
      <h1>История заказов</h1>
      <div className='date_order'>
        <span className='gray_text'>Выберите даты:</span>
        <div className='dates'>
          <OrderCalendar />
          <OrderCalendar />
        </div>
        <div className='orders'>
          <span className='gray_text'>15.10.2023</span>
          {orders.map((el) => (
            <div className='order' key={el.id}>
              <div className='user'>
                <Icon />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
