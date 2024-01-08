import React, { useEffect, useState } from 'react';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import Item from '../../icons/item-logo.svg';
import './BasketItem.scss';

const BasketItem = ({ el }) => {
  const [options, setOptions] = useState(false);
  const [quantity, setQuantity] = useState(el.quantity);

  const increament = () => {
    setQuantity(el.quantity + 1);
  };

  const decreament = () => {
    quantity > 1 && setQuantity(el.quantity - 1);
  };

  useEffect(() => {
    setQuantity(el.quantity);
  }, [quantity]);

  return (
    <div className='item'>
      <div className='top'>
        <img src={Item} alt='#' />
        <div className='title'>
          <p>{el.name}</p>
          <p>
            <span>Длина- 170 см.</span>
            <span>Ширина- 70 см.</span>
            <span>Глубина- 50 см.</span>
          </p>
        </div>
        <div className='points' onClick={() => setOptions(!options)}>
          <div className='point'></div>
          <div className='point'></div>
          <div className='point'></div>
          {options && (
            <div className='options'>
              <div className='opt first'>Редактирование комплекта</div>

              <div className='line'></div>

              <div className='opt second'>Перенести в сохраненные</div>

              <div className='line'></div>

              <div className='opt third'>Удалить</div>

              <div className='line'></div>

              <div className='opt fourth'>Отмена</div>
            </div>
          )}
        </div>
      </div>
      <div className='bottom'>
        <h2 className='price'>{el.price} с</h2>
        <div className='quantity'>
          <div onClick={decreament}>
            <Minus />
          </div>
          <h2>{el.quantity}</h2>
          <div onClick={increament}>
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
