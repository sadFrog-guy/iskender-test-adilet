import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseEnterShow } from '../../context/EnterContext';
import { ReactComponent as Logo } from '../../components/icons/Group.svg';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import EmailInput from '../../components/EmailInput/EmailInput';
import PhoneInput from 'react-phone-number-input';
import Register from './Register';
import 'react-phone-number-input/style.css';
import 'react-phone-number-input/style.css';
import './Enter.scss';

const LogIn = () => {
  const navigate = useNavigate();
  const {
    loginWithPhone,
    loginWithEmail,
    register,
    setLoginWithPhone,
    setLoginWithEmail,
    setRegister,
  } = UseEnterShow();
  const ShowRegister = () => {
    setLoginWithPhone(false);
    setLoginWithEmail(false);
    setRegister(true);
  };
  const [tel, setTel] = useState();
  const [userDataPhone, setUserDataPhone] = useState({
    phoneNumber: null,
    password: '',
  });
  const [userDataEmail, setUserDataEmail] = useState({
    email: null,
    password: '',
  });

  const handleChange = (e) => {
    if (loginWithEmail) {
      setUserDataEmail({
        ...userDataEmail,
        email: e.target.value,
        password: e.target.value,
      });
    }
    setUserDataPhone({
      ...userDataPhone,
      phoneNumber: tel,
      password: e.target.value,
    });
  };
  const isVariable = () => {
    const Datas = Object.values(
      (loginWithPhone && userDataPhone) || (loginWithEmail && userDataEmail)
    );
    if (Datas[0] !== null && Datas[1].length > 0) {
      return true;
    }
    return false;
  };

  const ClickEnterBtn = () => {
    setLoginWithPhone(false);
    setLoginWithEmail(false);
    navigate('/my-account', { replace: true });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loginWithPhone, loginWithEmail]);

  return register ? (
    <Register />
  ) : (
    <div className='wrapper'>
      <div className='login-container'>
        <div className='container'>
          <h1 className='headline'>
            <Logo />
          </h1>
          <div className='line'></div>
          <div className='description'>
            <h2 className='desc'>Вход</h2>
            <p className='desc-sec'>Введите свои данные, чтобы войти</p>
          </div>

          <form onSubmit={(e) => onSubmit(e)}>
            {loginWithEmail && <EmailInput handleChange={handleChange} />}
            {loginWithPhone && (
              <div className='input'>
                <label htmlFor='phoneNumber' className='label'>
                  Номер телефона
                </label>
                <PhoneInput
                  id='phoneNumber'
                  name='phoneNumber'
                  defaultCountry='KG'
                  displayInitialValueAsLocalNumber
                  withCountryCallingCode
                  initialValueFormat='national'
                  value={tel}
                  onChange={setTel}
                />
              </div>
            )}

            <PasswordInput handleChange={handleChange} />

            <div className='bottom-form'>
              <div className='remember'>
                <input type='checkbox' id={'checkbox'} />
                <label htmlFor='checkbox'>Запомнить меня</label>
              </div>
              {isVariable() ? (
                <button
                  type='button'
                  className={'button'}
                  onClick={ClickEnterBtn}
                >
                  Войти
                </button>
              ) : (
                <button type='button' className={'disabled'}>
                  Войти
                </button>
              )}
            </div>
          </form>

          <p className='registration-link' onClick={ShowRegister}>
            Новый пользователь? <a href='#'>Зарегистрироваться</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
