import React from 'react';
import { ReactComponent as Message } from '../../components/icons/Message.svg';

const EmailInput = ({ handleChange }) => {
  return (
    <div className='input'>
      <label htmlFor='email' className='label'>
        E- mail
      </label>
      <Message />
      <input
        id='email'
        name='email'
        type='email'
        placeholder='Ваша почта'
        onChange={(e) => handleChange(e, 'email')}
      />
    </div>
  );
};

export default EmailInput;
