import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './pages/home/HomePage';

import GoodsOfferPage from './pages/offer/GoodsOfferPage';
import ExhibitOfferPage from './pages/offer/ExhibitOfferPage';

import SellerJoinPage from './pages/seller/SellerJoinPage';

function AppRouter() {
  return (
    <div style={{ marginLeft: '250px' }}>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/offer/goods/register">
          <GoodsOfferPage></GoodsOfferPage>
        </Route>
        <Route exact path="/offer/exhibit/register">
          <ExhibitOfferPage></ExhibitOfferPage>
        </Route>
        <Route exact path="/seller/join">
          <SellerJoinPage></SellerJoinPage>
        </Route>
      </Switch>
    </div>
  );
}

export default AppRouter;