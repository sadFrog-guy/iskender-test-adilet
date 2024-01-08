import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import search from '../../components/icons/Search.svg';
import BranchItem from '../branches/branchesItem';
import '../../styles/components/mapIframe.scss';

function SearchBranches() {
  const branches = useSelector((state) => state.branches.data);
  const {
    branches: { getBranches },
  } = useDispatch();

  useEffect(() => {
    getBranches();
  }, []);

  return (
    <div className='map-container'>
      <div className='searc-titles'>
        <input type='text' placeholder='Название магазина' />
        <img src={search} alt='#' />
      </div>
      <div className='all-branches'>
        {branches.map((item, index) => {
          return <BranchItem key={index} branch={item} />;
        })}
      </div>
    </div>
  );
}

export default SearchBranches;
