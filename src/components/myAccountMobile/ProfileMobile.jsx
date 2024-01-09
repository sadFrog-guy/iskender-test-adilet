import React from 'react';
import { ReactComponent as ArrowIcon } from '../icons/Arrow 6.svg';
import { ReactComponent as EllipsesSvg } from '../icons/ellipses.svg';
import profile_photo from '../../assets/profile.png';
import {NavLink} from "react-router-dom";
import * as Icons from '../icons/myAccount';
import '../../styles/components/ProfileMobile.scss';

const ProfileMobile = () => {
  return (
      <div className='profileAdaptive'>
        <div className="profileAdaptive_background">
          <EllipsesSvg/>
        </div>

        <div className='profileAdaptive_top'>
          <ArrowIcon/>

          <p className='profileAdaptive_text'>
            Профиль
          </p>
        </div>

        <div className='profileAdaptive_window'>
          <div className='profileAdaptive_pfp'>
            <p className='profileAdaptive_change'>
              Изм.
            </p>

            <div className='profileAdaptive_image'>
              <img src={profile_photo} alt="Profile"/>
            </div>

            <h1 className='profileAdaptive_username'>
              Султан Тулепбаев
            </h1>

            <div className="profileAdaptive_info">
              <p className="profileAdaptive_phone">
                +996 500 345 876
              </p>

              <p className="profileAdaptive_location">
                Кыргызстан, Бишкек
              </p>
            </div>

            <h1 className='title'>
              Дебиторская задолженность:
              &nbsp;
              <span className='som'>999 999 c</span>
            </h1>
          </div>

          <div className='profileAdaptive_navigation'>
            <div className="profileAdaptive_list">
              <NavLink
                  className={`my_account_navigation_block_link`}
                  to='/my-account/favourites'
                  end
              >
                <div className='profileAdaptive_list__item'>
                  <img src={Icons.HeartIcon} alt='Test' /> Избранные товары
                </div>

                <div className='fav_count'>
                  {5}
                </div>
              </NavLink>

              <NavLink
                  className={`my_account_navigation_block_link`}
                  to='/'
                  end
              >
                <div className='profileAdaptive_list__item'>
                  <img src={Icons.PaperNoteV1Icon} alt='Test' /> Новости и Акции
                </div>
              </NavLink>

              <NavLink
                  className={`my_account_navigation_block_link no_border`}
                  to='/my-account/order-history'
                  end
              >
                <div className='profileAdaptive_list__item'>
                  <img src={Icons.ClockSquareIcon} alt='Test' /> Новости и Акции
                </div>
              </NavLink>
            </div>

            <div className="profileAdaptive_list">
              <NavLink
                  className={`my_account_navigation_block_link`}
                  to='/'
                  end
              >
                <div className='profileAdaptive_list__item'>
                  <img src={Icons.ShieldDoneIcon} alt='Test' /> Политика конфидециальности
                </div>
              </NavLink>

              <NavLink
                  className={`my_account_navigation_block_link`}
                  to='/'
                  end
              >
                <div className='profileAdaptive_list__item'>
                  <img src={Icons.PaperNoteV2Icon} alt='Test' /> Настройки
                </div>
              </NavLink>

              <NavLink
                  className={`my_account_navigation_block_link no_border`}
                  to='/'
                  end
              >
                <div className='profileAdaptive_list__item'>
                  <img src={Icons.PhoneIcon} alt='Test' /> Контакты
                </div>
              </NavLink>
            </div>

            <div className="profileAdaptive_list">
              <NavLink
                  className={`my_account_navigation_block_link no_border`}
                  to='/'
                  end
              >
                <div className='profileAdaptive_list__item'>
                  <img src={Icons.LogoutIcon} alt='Test' /> Выйти
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileMobile;