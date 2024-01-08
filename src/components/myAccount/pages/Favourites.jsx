import React from 'react';
import Search from '../../UI/Search/Search';
import ProductsItem from '../../products/productsItem';
import Product from '../.../../../../components/icons/product-default.svg';
import '../../../styles/components/favourites.scss';

const Favourites = () => {
  const favorite = {
    name: 'Держатель для лейки BOOU PG605',
    image: Product,
    price: 1000,
    promoPrice: 1294,
    quantity: 1,
  };
  const favourites = new Array(4).fill(favorite);
  return (
    <div className='favourites_container'>
      <Search />
      <h1>Избранные товары</h1>
      <div className='favourites'>
        {favourites.map((favourite, idx) => (
          <ProductsItem key={idx} product={favourite} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
