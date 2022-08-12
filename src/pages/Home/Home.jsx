import React from 'react';
import { Container } from '@material-ui/core';
import DisplayProducts from '../../components/Product/DisplayProducts';
import ProductListByCategory from '../../components/Product/ProductListByCategory';


const Home = () => {
  return (
    <>
    {/* <Scroll/> */}
      <DisplayProducts direction={'x'} />
     
      <Container>
     
      <ProductListByCategory/>
      </Container>
    </>
  );
};

export default Home;
