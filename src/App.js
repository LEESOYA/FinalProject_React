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
    path: '/offer/goods/register',
    text: '상품등록',
  },
  {
    path: '/offer/exhibit/register',
    text: '전시회등록',
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
