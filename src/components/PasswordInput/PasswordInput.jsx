import React, { useState } from 'react';
import { ReactComponent as Eye } from '../../components/icons/Eye.svg';
import { ReactComponent as OpenEye } from '../../components/icons/OpenEye.svg';
import { ReactComponent as Key } from '../../components/icons/Key.svg';

const PasswordInput = ({ handleChange, label, addition }) => {
  const [shownPassword, setShownPassword] = useState(false);
  const handleShow = () => {
    setShownPassword(!shownPassword);
  };
  return (
    <div className='input'>
      <label htmlFor='password' className='label'>
        {label ? label : 'Пароль'}
      </label>
      <Key />
      <input
        id='password'
        name='password'
        type={shownPassword ? 'text' : 'password'}
        onChange={(e) => handleChange(e, 'password')}
      />
      {shownPassword ? (
        <OpenEye onClick={handleShow} />
      ) : (
        <Eye onClick={handleShow} />
      )}
      <p className='passwrd-sec'>{addition ? addition : 'Забыли пароль?'}</p>
    </div>
  );
};

export default PasswordInput;
