import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Breadcrumbs from './Breadcrumbs';
import { useLocation, useNavigate } from 'react-router-dom';
import { UseEnterShow } from '../../context/EnterContext';
import Enter from '../../pages/Enter/Enter';

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const { loginWithPhone, loginWithEmail, register } = UseEnterShow();

  useEffect(() => {
    if (loginWithPhone || loginWithEmail) {
      navigate('/login#');
    } else if (register) {
      navigate('/register#');
    }
  }, [loginWithPhone, loginWithEmail, register]);

  if (loginWithPhone || loginWithEmail || register) {
    return (
      <div className={'loginnig'}>
        <Enter />
      </div>
    );
  }
  return (
    <div className={'main-background' + (isHomePage ? ' homeM' : '')}>
      <Header />
      <div className='container'>
        <Breadcrumbs />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
