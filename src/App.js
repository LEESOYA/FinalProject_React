import React from 'react';
import './App.css';

import {
  BrowserRouter as Router
} from "react-router-dom";

import LNB from './components/container/LNB';

// router
import AppRouter from './AppRouter';

const menuList = [
  {
    path: '/',
    text: '메인',
  },
  {
    path: '/offer/product/register',
    text: '상품등록',
  },
  {
    path: '/offer/product/modify',
    text: '상품수정',
  },
  {
    path: '/offer/product/info',
    text: '상품별정보',
  },
  {
    path: '/order/product/confirm',
    text: '주문확인',
  },
  {
    path: '/member/management',
    text: '회원관리',
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <LNB menuList={menuList}></LNB>
        <AppRouter></AppRouter>
      </Router>
    </div>
  );
}

export default App;
