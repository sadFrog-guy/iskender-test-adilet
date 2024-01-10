import React from 'react';

const ModalMobileB = ({isActive, handleClick}) => {
  return (
      <div className={`profileAdaptive_modal ${isActive ? 'active' : ''}`}>
        <div className="profileAdaptive_modal__window">
          <div className="profileAdaptive_modal__top">
            <p className="profileAdaptive_modal__title">
              Вы действительно хотите <br/> выйти?
            </p>
          </div>

          <div className="profileAdaptive_modal__bottom">
            <button className="profileAdaptive_modal__button cancel" onClick={handleClick}>
              Выйти
            </button>

            <button className="profileAdaptive_modal__button" onClick={handleClick}>
              Остаться
            </button>
          </div>
        </div>
      </div>
  );
};

export default ModalMobileB;