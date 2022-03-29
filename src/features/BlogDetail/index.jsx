import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';

BlogDetail.propTypes = {};

function BlogDetail() {
  const match = useLocation();
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default BlogDetail;