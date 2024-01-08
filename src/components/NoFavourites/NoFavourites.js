import React from 'react';
import heart_icon from '../icons/heart_nofav.svg';
import '../../styles/components/NoFavourites.scss';

const NoFavourites = () => {
  return (
      <div className='no_fav'>
        <img className='no_fav__img' src={heart_icon} alt="No favourites"/>

        <p className='no_fav__text'>
          Избранных товаров нет
        </p>
      </div>
  );
};

export default NoFavourites;