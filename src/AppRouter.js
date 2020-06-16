import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './pages/home/HomePage';

import ProductOfferPage from './pages/offer/ProductOfferPage';
import ProductModifyPage from './pages/offer/ProductModifyPage';
import ProductInfoPage from './pages/offer/ProductInfoPage';

import ProductOrderConfirmPage from './pages/order/ProductOrderConfirmPage';

import MemberManagePage from './pages/member/MemberManagePage';
import MemberOrderListPage from './pages/member/MemberOrderListPage';

import QandABoardPage from './pages/board/QandABoardPage';


function AppRouter() {
  return (
    <div style={{ marginLeft: '250px' }}>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/offer/product/register">
          <ProductOfferPage></ProductOfferPage>
        </Route>
        <Route exact path="/offer/product/modify">
          <ProductModifyPage></ProductModifyPage>
        </Route>
        <Route exact path="/offer/product/register">
          <ProductOfferPage></ProductOfferPage>
        </Route>
        <Route exact path="/offer/product/info">
          <ProductInfoPage></ProductInfoPage>
        </Route>
        <Route exact path="/order/product/confirm">
          <ProductOrderConfirmPage></ProductOrderConfirmPage>
        </Route>
        <Route exact path="/member/management">
          <MemberManagePage></MemberManagePage>
        </Route>
        <Route exact path="/member/orderlist">
          <MemberOrderListPage></MemberOrderListPage>
        </Route>
        <Route exact path="/board/qanda">
          <QandABoardPage></QandABoardPage>
        </Route>
        
      </Switch>
    </div>
  );
}

export default AppRouter;