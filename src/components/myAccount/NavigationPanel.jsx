import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Icons from '../icons/myAccount';

const NavigationPanel = () => {
  const navLinksFirst = [
    {
      icon: Icons.HeartIcon,
      label: 'Избранные товары',
      href: '/my-account/favourites',
    },
    {
      icon: Icons.ClockSquareIcon,
      label: 'История заказов',
      href: '/my-account/order-history',
    },
    {
      icon: Icons.ShieldDoneIcon,
      label: 'Политика конфиденциальности',
      href: '/my-account/privacy-policy',
    },
    {
      icon: Icons.PaperNoteV2Icon,
      label: 'Условия использования',
      href: '/my-account/terms-use',
    },
  ];

  return (
    <div className='my_account_navigation'>
      <div className='my_account_navigation_block'>
        {navLinksFirst.map((item, index) => (
          <NavLink
            key={index}
            className={`my_account_navigation_block_link
          ${index !== navLinksFirst.length - 1 && 'line'}`}
            to={item.href}
          >
            <img src={item.icon} alt='Test' /> {item.label}
          </NavLink>
        ))}
      </div>
      <div className='my_account_navigation_block'>
        <button className='my_account_navigation_block_link logout_button'>
          <img src={Icons.LogoutIcon} alt='LogoutIcon' />
          Выйти
        </button>
      </div>
    </div>
  );
};

export default NavigationPanel;
