import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncProducts } from '../../features/productsSlice';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import './Category.css'

const categories = [
  'Featured',
  'Followed',
  'new'
];
const DisplayProducts = ({ direction }) => {
  const { products } = useSelector((state) => state.products);
  const [category, setCategory] = useState('flower');
  const [width, setWidth] = useState(0);
  const dispatch = useDispatch();
  const carousel = useRef();
  useEffect(() => {
    dispatch(fetchAsyncProducts(category));
    setTimeout(() => {
      setWidth(
        carousel.current.scrollWidth - carousel.current.offsetWidth
      );
    }, 1000);
  }, [dispatch, category]);
  return (
    <Fragment>
      <div  className="container-main-title">
        <div  className="container-title"> <p>Start Designing</p></div>
        <div  className="container-title"><p>Design my room</p> </div>
        <div  className="container-title"><p>My ideaBook</p></div>
      </div>

      <h4 className="titile">Designs</h4>
      <div>
        <ul>
          {categories.map((category) => (
            <li key={category} onClick={() => setCategory(category)}>
              {category}
            </li>
          ))}
          <li id="see-all">see all </li>
        </ul>
        
      </div>
      <motion.div className="carousel" ref={carousel}>
        <motion.div
          drag={direction}
          dragConstraints={{ right: 0, left: -width }}
          className={`inner-carousel ${direction}`}
        >
          {console.log(products)}
          {products.map((item, index) => {
            return <ProductCard key={index} item={item} />;
          })}
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default DisplayProducts;
