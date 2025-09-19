import { api } from './client';

export async function listTasks() {
  return (await api.get('/api/tareas')).data;
}

export async function deleteTask(id) {
  return (await api.delete(`/api/tareas/${id}`)).data;
}

export async function completeTask(id) {
  try {
    return (await api.patch(`/api/tareas/${id}/completar`)).data;
  } catch {
    return (await api.patch(`/api/tareas/${id}`, { esta_completa: true })).data;
  }
}
