import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsItem from './newsItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const News = () => {
  const news = useSelector((state) => state.news.data);
  const {
    news: { getNews },
  } = useDispatch();

  useEffect(() => {
    getNews();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='news'>
      <div className='products-title'>
        <h2>Новости</h2>
        <div className='categories-title_right'>все</div>
      </div>
      <Slider {...settings}>
        {news.map((n) => (
          <NewsItem key={n._id} news={n} />
        ))}
      </Slider>
    </div>
  );
};

export default News;
