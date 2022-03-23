import React from 'react';
import { Route, Routes, useLocation, Outlet } from 'react-router-dom';
import Main from './pages/Main';

Home.propTypes = {};

function Home() {
  const match = useLocation();
  
  return (
    <>
      <Routes>
        <Route path={match.pathname} element={<Main />} />
      </Routes>
    </>
  );
}

export default Main;