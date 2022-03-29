import './App.css';
import React, { Suspense } from 'react';
import Loader from 'components/client/Loader';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LayoutClient from 'features/LayoutClient';
import LayoutAdmin from 'features/admin/LayoutAdmin';

const Home = React.lazy(() => import('./features/Home'));
const BlogDetail = React.lazy(() => import('./features/BlogDetail'));
const Dashboard = React.lazy(() => import('./features/admin/Dashboard'));
const BlogAdmin = React.lazy(() => import('./features/admin/Blog'));
const CategoryAdmin = React.lazy(() => import('./features/admin/Category'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='*' element={<LayoutClient />}>
              <Route path='/*' element={<Home />} />
              <Route path='single-page/*' element={<BlogDetail />} />
            </Route>

            <Route path='admin' element={<LayoutAdmin />}>
              <Route path='dashboard/*' element={<Dashboard />} />
              <Route path='blog/*' element={<BlogAdmin />} />
              <Route path='category/*' element={<CategoryAdmin />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
