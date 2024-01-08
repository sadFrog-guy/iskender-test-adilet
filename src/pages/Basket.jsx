import React from 'react';
import BasketContent from '../components/basketContent/basketContent';
import { UseBasket } from '../context/BasketContext';
import BasketIcon from '../components/icons/Shop.svg';
// import SuccessOrder from '../components/icons/seccess-order.svg';

import '../styles/components/basket.scss';

const Basket = () => {
  const { basket } = UseBasket();

  if (basket.length >= 1) {
    return (
      <div className='basket-page-container'>
        <BasketContent />
      </div>
    );
  } else {
    return (
      <div className='emptyBasket'>
        <img src={BasketIcon} alt='' />
        <p>Корзина пустая</p>
      </div>
    );
  }
};

// корзина после заказа
// <div className='emptyBasket'>
//   <img src={SuccessOrder} alt='' />
// </div>

export default Basket;
