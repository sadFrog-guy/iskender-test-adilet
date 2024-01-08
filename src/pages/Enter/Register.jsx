import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../components/icons/Group.svg';
import { ReactComponent as User } from '../../components/icons/User.svg';
import { ReactComponent as Location } from '../../components/icons/Location-i.svg';
import { UseEnterShow } from '../../context/EnterContext';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import EmailInput from '../../components/EmailInput/EmailInput';
import PhoneInput from 'react-phone-number-input';
import './Enter.scss';
import Verification from '../../components/UI/Verification/Verification';

const Register = () => {
  // verify
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeSubmit = async (code) => {
    if (isLoading) return;

    try {
      const payload = new FormData();
      payload.append('code', code);
      const result = await fetch('/path/to/api/endpoint', {
        method: 'POST',
        body: payload,
      });
      if (!result.ok) {
        const mess = await result.text();
        throw new Error(mess);
      }
      alert('Code is verified!');
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  // verify

  const navigate = useNavigate();
  const [tel, setTel] = useState();
  const { setLoginWithPhone, register, setRegister } = UseEnterShow();
  const ShowTrue = () => {
    setRegister(false);
    setLoginWithPhone(true);
  };
  const [userData, setUserData] = useState({
    userName: '',
    phoneNumber: null,
    location: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { value } = e.target;
    setUserData({
      ...userData,
      userName: value,
      phoneNumber: tel,
      location: value,
      email: value,
      password: value,
    });
  };

  const isVariable = () => {
    if (
      userData.userName.length > 0 &&
      userData.phoneNumber &&
      userData.location.length > 0 &&
      userData.email.length > 0 &&
      userData.password.length > 0
    ) {
      return true;
    }
    return false;
  };

  // Verifying
  const [verify, setVerify] = useState(false);

  const ClickEnterBtn = () => {
    isVariable() ? setVerify(true) : setVerify(false);
  };
  const ClickEnterBtnAfterVerify = () => {
    setRegister(false);
    navigate('/my-account', { replace: true });
    setVerify(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    register && (
      <div className='wrapper'>
        <div className='register-container'>
          {!verify ? (
            <div className='container-register'>
              <h1 className='headline'>
                <Logo />
              </h1>
              <div className='line'></div>
              <div className='description'>
                <h2 className='desc'>Регистрация</h2>
                <p className='desc-sec'>
                  Введите свои данные, чтобы зарегистрироваться
                </p>
              </div>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className='input'>
                  <label htmlFor='userName' className='label'>
                    ФИО
                  </label>
                  <User />
                  <input
                    id='userName'
                    name='userName'
                    type='text'
                    placeholder='Ваше ФИО'
                    onChange={(e) => handleChange(e)}
                  />
                </div>

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

                <div className='input'>
                  <label htmlFor='location' className='label'>
                    Город
                  </label>
                  <Location />
                  <input
                    id='location'
                    name='location'
                    type='text'
                    placeholder='Бишкек'
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <EmailInput handleChange={handleChange} />

                <PasswordInput
                  handleChange={handleChange}
                  label={'Создайте пароль'}
                  addition={' '}
                />
                <PasswordInput
                  handleChange={handleChange}
                  label={'Повторите пароль'}
                  addition={' '}
                />
                <div className='bottom-form'>
                  {isVariable() ? (
                    <button
                      type='button'
                      className={'button'}
                      onClick={ClickEnterBtn}
                    >
                      Зарегистрироваться
                    </button>
                  ) : (
                    <button type='button' className={'disabled'}>
                      Зарегистрироваться
                    </button>
                  )}
                </div>
              </form>
              <p className='registration-link' onClick={ShowTrue}>
                Уже есть аккаунт? <a href='#'>Войти</a>
              </p>
            </div>
          ) : (
            <div className='container-register'>
              <h1 className='headline'>
                <Logo />
              </h1>
              <div className='line'></div>
              <div className='description'>
                <h2 className='desc'>Код подтверждения</h2>
                <p className='desc-sec'>
                  Для завершения регистрации введите код отправленный на номер
                  +996 345 876
                </p>
              </div>
              {/* code */}
              <Verification isLoading={isLoading} callback={handleCodeSubmit} />
              {/* code */}
              <div className='bottom-form'>
                {isVariable() ? (
                  <button
                    type='button'
                    className={'button'}
                    onClick={ClickEnterBtnAfterVerify}
                  >
                    Зарегистрироваться
                  </button>
                ) : (
                  <button type='button' className={'disabled'}>
                    Зарегистрироваться
                  </button>
                )}
              </div>
              <p className='registration-link' onClick={ShowTrue}>
                Уже есть аккаунт? <a href='#'>Войти</a>
              </p>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Register;
