import React, { useEffect } from 'react';

// Import css files
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import ProductsItem from './productsItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export default function Products({ title }) {
  const {
    products: { getProducts },
  } = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    getProducts('?bestseller=true&page=1');
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className='products container'>
      <div className='products-title'>
        <h2>{title}</h2>
        <Link to='/catalog' className='categories-title_right'>
          перейти в католог
        </Link>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
}
