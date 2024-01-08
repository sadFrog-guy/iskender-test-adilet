import React from 'react';
import { UseEnterShow } from '../../context/EnterContext';
import Register from './Register';
import LogIn from './LogIn';

const Enter = () => {
  const { loginWithPhone, loginWithEmail } = UseEnterShow();

  if (loginWithPhone || loginWithEmail) {
    return <LogIn />;
  } else {
    return <Register />;
  }
};

export default Enter;
