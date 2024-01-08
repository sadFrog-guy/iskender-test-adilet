import React from 'react';
import CatalogProducts from '../components/CatalogBlock/CatalogProducts';
import CatalogSidebar from '../components/CatalogBlock/CatalogSidebar';

function CategoryPage() {
  return (
    <>
      <div className='category-page'>
        <CatalogSidebar title='Категории' />
        <CatalogProducts title='Категория' />
      </div>
    </>
  );
}

export default CategoryPage;
