import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'src/mixins/chartjs';
import DashboardView from 'src/views/dashboard/DashboardView';
import StockListView from 'src/views/stocks/StockListView';
import SettingsView from 'src/views/settings/SettingsView';
import DashboardLayout from './layouts/DashboardLayout';
import StockDetailView from './views/stocks/StockDetailView';
import SaleListView from './views/sales/SaleListView';
import MainLayout from './layouts/MainLayout';
import LoginView from './views/auth/LoginView';
import NotFoundView from './views/errors/NotFoundView';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/app/dashboard" />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/404" element={<NotFoundView />} />
      </Route>
      <Route path="app" element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="stocks">
          <Route path="/" element={<StockListView />} />
          <Route path=":id" element={<StockDetailView />} />
        </Route>
        <Route path="/sales" element={<SaleListView />} />
        <Route path="/settings" element={<SettingsView />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  );
};

export default App;
