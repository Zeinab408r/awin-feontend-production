import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncSubcategory } from '../../features/subCategorySlice';
import './Category.css';

const subcategories = ['Furniture',  'Animal','Country'];
const ProductListByCategory = () => {
  const { subcategory: imageData } = useSelector(
    (state) => state.subcategory
  );

  const [category, setCategory] = useState('sofa');
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncSubcategory(category));
  }, [category]);
  return (
    <>
      <h4>See By Categpry</h4>
      <div>
        <ul> {subcategories.map((category) => (
            <button
              className="button-container"
              key={category}
              onClick={() => setCategory(category)}
            >
              {category}
            </button>
          ))}</ul>
         
        
      </div>

      <div className="img-area">
        {imageData.loading && <div>Loading...</div>}
        {!imageData.loading && imageData.error ? (
          <div>Error: {imageData.error}</div>
        ) : null}

        {imageData.map((item, index) => {
          return (
            <div className="single-img">
              <img
                id="img-container"
                key={index}
                src={item.urls.thumb}
                alt=""
                height="250"
                width="250"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductListByCategory;
