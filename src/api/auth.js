import { api } from './client';

export async function login(email, password) {
  return (await api.post('/api/auth/login', { email, password })).data;
}

export async function logout() {
  return (await api.post('/api/auth/logout')).data;
}

export async function me() {
  
  return (await api.get('/api/auth/me')).data;
}
