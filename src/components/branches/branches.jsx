import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BranchItem from './branchesItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Branches = () => {
  const branches = useSelector((state) => state.branches.data);
  const {
    branches: { getBranches },
  } = useDispatch();

  useEffect(() => {
    getBranches();
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className='products-title'>
        <h2>Адреса магазинов</h2>
        <Link to='/addresses' className='categories-title_right'>
          все
        </Link>
      </div>
      <div className='branches-container'>
        <Slider {...settings}>
          {branches.map((branch) => (
            <BranchItem key={branch._id} branch={branch} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Branches;
