import { api } from './client';

export async function listTasks() {
  return (await api.get('/api/tasks')).data;
}

export async function deleteTask(id) {
  return (await api.delete(`/api/tasks/${id}`)).data;
}

export async function completeTask(id) {
  return (await api.patch(`/api/tasks/${id}/complete`)).data;
}
