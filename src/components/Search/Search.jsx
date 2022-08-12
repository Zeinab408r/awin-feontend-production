import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Search.css';
import { fetchAsyncProducts } from '../../features/productsSlice';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      dispatch(fetchAsyncProducts(keyword));
      console.log(keyword);
      setKeyword('');
    }
  };

  const { products } = useSelector((state) => state.products);

  return (
    <div >
      <div className="main">
        <form onSubmit={searchSubmitHandler}>
          
          <input
            id="search-input"
            type="search"
            pattern=".*\S.*"
            required
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input type="submit" className="caret" value="Search" />
        </form>
        </div>
      <div className="img-area">
        {console.log(products)}
        {products.map((item,index) => (
             <div className="single-img"><img className="gallery-image" key={index} src={item.urls.thumb} alt=""  height="300"
             width="300"/></div>
          
        ))}</div>
        
    </div>
  );
};

export default Search;
