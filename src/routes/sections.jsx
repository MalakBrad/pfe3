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
      element: <actionsPage />,
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
import {ROLE} from "src/utils/data";
import ProtectedRoute from "src/routes/ProtectedRoute";
import DirectionSupportPage from 'src/pages/DirectionSupport';

const IndexPage = lazy(() => import('src/pages/app'));
const UserPage = lazy(() => import('src/pages/user'));
const LoginPage = lazy(() => import('src/pages/login'));
const ProductsPage = lazy(() => import('src/pages/products'));
const Page404 = lazy(() => import('src/pages/page-not-found'));
const PlanactionsPage = lazy(() => import('src/pages/Planactions'));
const PrestatairePage = lazy (()=> import('src/pages/Prestataire'))

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
                <Route path="/user" element={
                    <ProtectedRoute roles={[ROLE.Admin]}>
                        <UserPage />
                    </ProtectedRoute>
                } />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/actions" element={<PlanactionsPage />} />
                <Route path="/pres" element={<PrestatairePage />} />
                <Route path="/Support" element={<DirectionSupportPage />} />

                {/* Add more subroutes as needed */}
              </Routes>
            </DashboardLayout>
          }
        />
        
          <Route path="/404" element={<Page404 />} />
          {/* Redirect all other paths to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

