import React from 'react';
import { ReactComponent as NewsIcon } from '../icons/newsIcon.svg';

const NewsItem = ({ news }) => {
  return (
    <div className='news-item'>
      <div>
        <h3>{news.name}</h3>
        <button>Подробнее</button>
      </div>
      <div>
        <NewsIcon />
      </div>
    </div>
  );
};

export default NewsItem;
