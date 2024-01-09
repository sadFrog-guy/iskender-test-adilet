import React from 'react';
import {Route, Routes} from "react-router-dom";
import Profile from "../myAccount/pages/Profile";
import Favourites from "../myAccount/pages/Favourites";
import OrderHistory from "../myAccount/pages/OrderHistory";
import PrivacyPolicy from "../myAccount/pages/PrivacyPolicy";
import TermsUse from "../myAccount/pages/TermsUse";
import ProfileMobile from "./ProfileMobile";

const PersonalAccountMobile = () => {
  return (
    <Routes>
      <Route path='/' element={<ProfileMobile />} />
      <Route path='/favourites' element={<Favourites />} />
      <Route path='/order-history' element={<OrderHistory />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/terms-use' element={<TermsUse />} />
    </Routes>
  );
};

export default PersonalAccountMobile;