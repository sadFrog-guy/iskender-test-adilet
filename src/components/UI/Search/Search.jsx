import React, { useEffect, useState } from 'react';
import searchIco from '../../icons/Search.svg';
import './Search.scss';

function Search() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults([1, 2]);
  }, []);

  return (
    <div className='custom-search'>
      <img src={searchIco} alt='search' />
      <input type='text' placeholder='Поиск' />
      <p className='custom-search_search-result'>
        {searchResults.length} Товаров
      </p>
    </div>
  );
}

export default Search;
