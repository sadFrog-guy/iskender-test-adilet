import React, {useState} from 'react';
import { ReactComponent as ArrowIcon } from '../icons/Arrow 6.svg';
import { ReactComponent as CameraIcon } from '../icons/Camera.svg';
import profile_photo from '../../assets/profile.png';
import userMy_icon from "../icons/User.svg";
import kyrgyzstan_icon from "../icons/Kyrgyzstan.svg";
import arrowDown_icon from "../icons/arrow-down.svg";
import messageMy_icon from "../icons/Message.svg";
import calendarMy_icon from "../icons/calendar.svg";
import locationMy_icon from "../icons/Location-i.svg";
import {useForm} from "react-hook-form";
import '../../styles/components/ProfileEditMobile.scss';
import ModalButtonMobile from "../ModalButtonMobile/ModalButtonMobile";
import ModalMobileA from "../ModalMobile/ModalMobileA";
import {NavLink} from "react-router-dom";

const ProfileEditMobile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const [selectedGender, setSelectedGender] = useState(null);
  const [isPfpActive, setPfpActive] = useState(false);

  const onSubmit = (data) => {
    const formData = { ...data, sex: selectedGender };
    console.log(formData);
  };

  const handleGenderButtonClick = (gender) => {
    setSelectedGender(gender);
  };

  const handlePfpClick = () => {
    setPfpActive(true)
  }

  const handleDarkClick = () => {
    setPfpActive(false)
  }

  return (
      <div className='profileEdit'>
        <ModalMobileA
          handleClick={handlePfpClick}
          isActive={isPfpActive}
        />

        <NavLink
            className='profileAdaptive_top profileEdit_top'
            to='/my-account'
        >
          <ArrowIcon/>

          <p className='profileAdaptive_text profileEdit_text'>
            Профиль
          </p>
        </NavLink>

        <div className="profileEdit_pfp">
          <div className="profileEdit_pfp__image" onClick={handlePfpClick}>
            <img src={profile_photo} alt=""/>

              <div className={`profileEdit_pfp__update ${isPfpActive ? 'active' : ''}`}>
                <CameraIcon/>
              </div>
          </div>
        </div>

        <div className="profileEdit_form">
          <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='input_high_block'>
              <label htmlFor='user_name'>ФИО</label>
              <div className='input_block'>
                <img className='icon' src={userMy_icon} alt='' />
                <input
                    type='text'
                    className={`input ${errors.name && `error`}`}
                    placeholder='ФИО'
                    {...register('name', { required: true, minLength: 2 })}
                />
              </div>
            </div>
            <div className='input_high_block'>
              <label htmlFor='user_name'>Номер телефона</label>
              <div className='input_block'>
                <div className='input input_wrap'>
                  <div className='input_wrap__flex'>
                    <img className='icon' src={kyrgyzstan_icon} alt='' />
                    <img className='icon' src={arrowDown_icon} alt='' />
                  </div>

                  <input
                      type='text'
                      className={`input input_wrap__phone ${errors.phone && `error`}`}
                      placeholder='Номер телефона'
                      {...register('phone', { required: true })}
                  />
                </div>
              </div>
            </div>
            <div className='input_high_block'>
              <label htmlFor='user_name'>E- mail</label>
              <div className='input_block'>
                <img className='icon' src={messageMy_icon} alt='' />
                <input
                    type='text'
                    className={`input ${errors.email && `error`}`}
                    placeholder='E- mail'
                    {...register('email', {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                />
              </div>
            </div>
            <div className='input_high_block'>
              <label htmlFor='user_name'>Дата рождения</label>
              <div className='input_block'>
                <img className='icon' src={calendarMy_icon} alt='' />
                <input
                    type='date'
                    className={`input input_date ${errors.date && `error`}`}
                    defaultValue='21.01.1995'
                    {...register('date', { required: true })}
                />
              </div>
            </div>
            <div className='input_high_block'>
              <label htmlFor='user_name'>Пол</label>
              <div className='buttons_block'>
                <span
                    className={`button_sex ${
                        selectedGender === 'Мужчина' ? 'active' : ''
                    }`}
                    onClick={() => handleGenderButtonClick('Мужчина')}
                >
                  Мужчина
                </span>
                <span
                    className={`button_sex ${
                        selectedGender === 'Женщина' ? 'active' : ''
                    }`}
                    onClick={() => handleGenderButtonClick('Женщина')}
                >
                  Женщина
                </span>
              </div>
            </div>
            <div className='input_high_block last'>
              <label htmlFor='user_name'>Город</label>
              <div className='input_block'>
                <img className='icon' src={locationMy_icon} alt='' />
                <input
                    type='text'
                    className={`input ${errors.city && `error`}`}
                    placeholder='Город'
                    {...register('city', { required: true, minLength: 2 })}
                />
              </div>
            </div>
            <div className='input_high_block'>
              <div className='buttons_block'>
                <button type='submit' className='button_submit active'>
                  Сохранить
                </button>
                <span className='button_submit undo'>Отмена</span>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default ProfileEditMobile;