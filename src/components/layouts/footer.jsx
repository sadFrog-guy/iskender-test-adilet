import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../icons/Logo.svg';
import { ReactComponent as Insta } from '../icons/insta.svg';
import { ReactComponent as Facebook } from '../icons/facebook.svg';
import { ReactComponent as GoogP } from '../icons/googlePlay.svg';
import { ReactComponent as AppS } from '../icons/appStore.svg';
import { ReactComponent as WhatsA } from '../icons/whatsappBut.svg';

const Footer = () => {
  return (
    <div className='background'>
      <div className='footer container'>
        <div className='footer-logo'>
          <a className='logo' href='#'>
            <Logo />
          </a>
          <div className='footer-logo_text'>
            Первый отечественный бренд Iskender на рынке сантехники от компании
            ОсОО «Стройдом.кг»
          </div>
          <div className='footer-download'>
            <a href='#'>
              <GoogP />
            </a>
            <a href='#'>
              <AppS />
            </a>
          </div>
        </div>
        {/* <div className='footer-columns'> */}
        <div className='footer-columns-column'>
          <div className='footer-columns-column_title'>Адреса</div>
          <div className='footer-columns-column_content'>
            <div>
              ЭлитСтрой <strong>ул. Ден-Сяопина 18/1</strong>
            </div>
            <div>
              Баткен <strong>ул. Льва-Толстого 19</strong>
            </div>
            <div>
              ТааТан <strong>ул. Лермонтова 6</strong>
            </div>
          </div>
        </div>
        <div className='footer-columns-column footer-columns-page'>
          <div className='footer-columns-column_title'>Компания</div>
          <div className='footer-columns-column_content'>
            <Link to='/catalog'>Каталог</Link>
            <div>Избранное</div>
            <div>Личный кабинет</div>
          </div>
        </div>
        <div className='footer-columns-column'>
          <div className='footer-columns-column_title'>Контакты</div>
          <div className='footer-columns-column_content'>
            <div>
              Email:
              <strong>iskender.kg@gmail.com</strong>
            </div>
            <div>
              Телефон:
              <strong>+996 (500) 000-104</strong>
              <strong>+996 (997) 000-104</strong>
              <strong>+996 (222) 000-104</strong>
            </div>
          </div>
          <a href='#'>
            <WhatsA />
          </a>
        </div>
        {/* </div> */}
      </div>
      <div className='footer-copyright container'>
        <p>© 2023 Iskender.kg - Отечественный бренд сантехники</p>
        <div className='footer-icons'>
          <a href=''>
            <Insta />
          </a>
          <a href=''>
            <Facebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
