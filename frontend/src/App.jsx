import React, { useEffect } from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import DashboardView from 'src/views/dashboard/DashboardView';
import StockListView from 'src/views/stocks/StockListView';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import useAuth from './utils/useAuth';
import LoginView from './views/auth/LoginView';
import NotFoundView from './views/errors/NotFoundView';
import SaleListView from './views/sales/SaleListView';
import StockDetailView from './views/stocks/StockDetailView';

const App = () => {
  const location = useLocation();
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/app/dashboard" />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/404" element={<NotFoundView />} />
        <Route path="*" element={<Navigate to="/app/dashboard" />} />
      </Route>
      <Route path="app" element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="stocks">
          <Route path="/" element={<StockListView />} />
          <Route path=":id" element={<StockDetailView />} />
        </Route>
        <Route path="/sales" element={<SaleListView />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  );
};

export default App;
