import React from 'react';
import Header from '../layouts/Header/Header'
import MainNav from '../layouts/MainNav';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from '../components/Search/Search';
import Home from '../pages/Home/Home';
const BaseRouter = () => {
  return (
    <div>
      <Header />
      <Container>
        <Switch>
          <Route path="/home/search" component={Search} />
          <Route path="/home" component={Home} />
        </Switch>
      </Container>

      <MainNav />
    </div>
  );
};

export default BaseRouter;
