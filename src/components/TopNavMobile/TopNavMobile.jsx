import React from 'react';
import { ReactComponent as ArrowIcon } from '../icons/Arrow 6.svg';
import {NavLink} from "react-router-dom";
import '../../styles/components/TopNav.scss';

const TopNavMobile = ({isLightColor, additionalClass = '', title = 'Профиль'}) => {
  return (
      <NavLink
          className={`profileAdaptive_top ${isLightColor ? 'light' : ''} ${additionalClass}`}
          to='/my-account'
      >
        <ArrowIcon/>

        <p className={`profileAdaptive_text ${isLightColor ? 'light' : ''} ${additionalClass}`}>
          {title}
        </p>
      </NavLink>
  );
};

export default TopNavMobile;