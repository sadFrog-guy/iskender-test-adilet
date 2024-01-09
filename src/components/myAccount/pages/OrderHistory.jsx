import React from 'react';
import { ReactComponent as Icon } from '../../../components/icons/Frame 48095518.svg';
import '../../../styles/components/OrderHistory.scss';
import OrderCalendar from '../../OrderCalendar';
import OrderItem from "../../OrderItem/OrderItem";
import EmptySection from "../../EmptySection/EmptySection";
import clock_icon from '../../icons/clock-nohistory.svg';

const OrderHistory = () => {
  // const orders = [
  //   {
  //     id: 1,
  //     name: 'Таалайбек к Элнура',
  //     number: '№SITE-13909',
  //     price: '24 262,05 сом ',
  //     btn: {
  //       text: 'Резерв не собирать',
  //       class: 'first',
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: 'Таалайбек к Элнура',
  //     number: '№SITE-13909',
  //     price: '24 262,05 сом ',
  //     btn: {
  //       text: 'Подтвержден юг',
  //       class: 'second',
  //     },
  //   },
  //   {
  //     id: 3,
  //     name: 'Таалайбек к Элнура',
  //     number: '№SITE-13909',
  //     price: '24 262,05 сом ',
  //     btn: {
  //       text: 'Самовывоз',
  //       class: 'third',
  //     },
  //   },
  //   {
  //     id: 4,
  //     name: 'Таалайбек к Элнура',
  //     number: '№SITE-13909',
  //     price: '24 262,05 сом ',
  //     btn: {
  //       text: 'Резерв не собирать',
  //       class: 'first',
  //     },
  //   },
  // ];

  const orders = []

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
          {orders.length !== 0
            ? orders.map((el) => (
                <OrderItem
                    icon={<Icon/>}
                    el={el}
                />
              ))
            : <EmptySection icon={clock_icon} title='История заказов пустая'/>
          }
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
