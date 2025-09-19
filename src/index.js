import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './state/AuthContext';
import ProtectedRoute from './state/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import UserData from './pages/UserData';
import Tasks from './pages/Tasks';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<Navigate to="usuario" replace />} />
            <Route path="usuario" element={<UserData />} />
            <Route path="tareas" element={<Tasks />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
