import React, { createContext, useState, useContext } from 'react';

const EnterContext = createContext();

export const UseEnterShow = () => {
  return useContext(EnterContext);
};

export const EnterProvider = ({ children }) => {
  const [loginWithPhone, setLoginWithPhone] = useState(false);
  const [loginWithEmail, setLoginWithEmail] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <EnterContext.Provider
      value={{
        loginWithPhone,
        setLoginWithPhone,
        register,
        setRegister,
        loginWithEmail,
        setLoginWithEmail,
      }}
    >
      {children}
    </EnterContext.Provider>
  );
};
