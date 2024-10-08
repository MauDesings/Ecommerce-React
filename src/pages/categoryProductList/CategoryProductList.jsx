import React from 'react'
import { useParams } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';
import ItemList from '../../components/itemList/ItemList';
import './categoryProductList.css'

const CategoryProductList = () => {
    const {data} = useProductContext();
    const {categoryId} = useParams();

    const categoryFilter = data.productData.filter(item => item.category.toLowerCase() === categoryId.toLowerCase());

  return (
      <div className='content-items-grid-filter'>
        {
            categoryFilter.map(item => (
                <ItemList key={item.id} {...item} />
            ))
        }
      </div>
  )
}

export default CategoryProductList
