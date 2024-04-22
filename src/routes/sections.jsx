/* import React, { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

const IndexPage = lazy(() => import('src/pages/app'));
const BlogPage = lazy(() => import('src/pages/blog'));
const UserPage = lazy(() => import('src/pages/user'));
const LoginPage = lazy(() => import('src/pages/login'));
const ProductsPage = lazy(() => import('src/pages/products'));
const Page404 = lazy(() => import('src/pages/page-not-found'));
const PlanactionsPage = lazy(() => import('src/pages/Planactions'));

export default function Router() {
  const routes = useRoutes([
    {
      path: 'login',
      element: <LoginPage />,
    },
    { 
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'actions',
      element: <PlanactionsPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
}
 */

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
   
const IndexPage = lazy(() => import('src/pages/app'));
const BlogPage = lazy(() => import('src/pages/blog'));
const UserPage = lazy(() => import('src/pages/user'));
const LoginPage = lazy(() => import('src/pages/login'));
const ProductsPage = lazy(() => import('src/pages/products'));
const Page404 = lazy(() => import('src/pages/page-not-found'));
const PlanactionsPage = lazy(() => import('src/pages/Planactions'));


const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard/*"
          element={
            <DashboardLayout>   
              {/* Subroutes for the dashboard */}
              <Routes>
                <Route path="/" element={<IndexPage />} /> {/* Redirect to UserPage by default */}
                <Route path="/user" element={<UserPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/actions" element={<PlanactionsPage />} />
                {/* Add more subroutes as needed */}
              </Routes>
            </DashboardLayout>
          }
        />
        {/* Redirect all other paths to login */}
        <Route path="*" element={<Navigate to="/login" />} />
        {/* Wrong path */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

