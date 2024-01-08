import React from 'react';

const CategoriesItem = ({ category }) => {
  return (
    <div className='categories-item'>
      <h3>{category.name}</h3>
      {/* <p>{category.name}</p> */}
      <img src={category.img} alt={category.name} />
    </div>
  );
};

export default CategoriesItem;
