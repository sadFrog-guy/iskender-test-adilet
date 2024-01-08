import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Icons from '../../icons/myAccount';
import profile_photo from '../../../assets/profile.png';
import kyrgyzstan_icon from '../../icons/Kyrgyzstan.svg';
import arrowDown_icon from '../../icons/arrow-down.svg';
import userMy_icon from '../../icons/User.svg';
import messageMy_icon from '../../icons/Message.svg';
import locationMy_icon from '../../icons/Location-i.svg';
import calendarMy_icon from '../../icons/calendar.svg';

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const [selectedGender, setSelectedGender] = useState(null);

  const onSubmit = (data) => {
    const formData = { ...data, sex: selectedGender };
    console.log(formData);
  };

  const handleGenderButtonClick = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className='personal_data'>
      <h1 className='personal_data_title'>Личные данные</h1>
      <div className='top_block'>
        <div className='left'>
          <div className='avatar_update'>
            <img className='avatar' src={profile_photo} alt='your photo' />
            <button className='upload_button'>Загрузить фото</button>
          </div>
          <div className='bonus_indebtedness'>
            <div className='block'>
              <h1 className='title'>Бонусы</h1>
              <span className='line'></span>
              <p className='som'>99 999 c</p>
            </div>
            <div className='block'>
              <h1 className='title'>Дебиторская задолженность</h1>
              <span className='line'></span>
              <p className='som'>999 c</p>
            </div>
          </div>
          <img className='qr_code' src={Icons.QrCodeIcon} alt='QR code' />
        </div>
        {/* ! form */}
        <div className='right'>
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
            <span className='line'></span>
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
    </div>
  );
};

export default Profile;
