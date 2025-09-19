import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';

export default function Layout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  return (
    <div style={{ padding: 20 }}>
      <nav style={{ marginBottom: 20 }}>
        <NavLink to="/usuario" style={{ marginRight: 10 }}>Datos Usuario</NavLink>
        <NavLink to="/tareas" style={{ marginRight: 10 }}>Tareas</NavLink>
        <button onClick={onLogout}>Logout</button>
      </nav>
      <Outlet />
    </div>
  );
}
