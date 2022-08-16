import React, {useEffect, useRef} from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import WebNav from './components/WebNav';
import HomePage from './pages/HomePage';
import Error404Page from './pages/Error404Page';
import LoginPage from './pages/LoginPage';
import Products from './components/Products';

function App() {
  const pageLoad = useRef(true);
  const access = localStorage.getItem('user token');

  useEffect(() => {
    if(pageLoad.current){
      pageLoad.current = false;
      localStorage.getItem('user token');
    }
  }, [access])

  return (
    <BrowserRouter>
      <WebNav />
      <Container fluid>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
