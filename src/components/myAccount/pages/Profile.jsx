import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Icons from '../../icons/myAccount';
import profile_photo from '../../../assets/profile.png';

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
                <img className='icon' src='' alt='' />
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
                <img className='icon' src='' alt='' />
                <input
                  type='text'
                  className={`input ${errors.phone && `error`}`}
                  placeholder='Номер телефона'
                  {...register('phone', { required: true })}
                />
              </div>
            </div>
            <div className='input_high_block'>
              <label htmlFor='user_name'>E- mail</label>
              <div className='input_block'>
                <img className='icon' src='' alt='' />
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
                <img className='icon' src='' alt='' />
                <input
                  type='date'
                  className={`input ${errors.date && `error`}`}
                  defaultValue='21.01.1995'
                  {...register('date', { required: true })}
                />
              </div>
            </div>
            <div className='input_high_block'>
              <label htmlFor='user_name'>Город</label>
              <div className='input_block'>
                <img className='icon' src='' alt='' />
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
