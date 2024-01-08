import React, { useState } from 'react';
import { ReactComponent as ArrowDown } from '../components/icons/arrow-down.svg';
import CalendarUI from './UI/Calendar/Calendar';

const OrderCalendar = () => {
  const [calendar, setCalendar] = useState(false);

  const openCalendar = () => {
    setCalendar(!calendar);
  };
  return (
    <div className='date' onClick={openCalendar}>
      <span>25/10/2023</span>
      <ArrowDown />
      {calendar && (
        <CalendarUI
          style={{
            fontFamily: 'Arial, sans-serif',
            color: '#0063A9',
          }}
        />
      )}
    </div>
  );
};

export default OrderCalendar;
