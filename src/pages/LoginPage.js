import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch {
      setError('Credenciales inválidas');
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 300, margin: '50px auto' }}>
      <h2>Login</h2>
      <div>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Entrar</button>
    </form>
  );
}
