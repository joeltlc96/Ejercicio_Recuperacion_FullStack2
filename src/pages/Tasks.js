import React, { useEffect, useState } from 'react';
import * as tasksApi from '../api/tasks';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  const load = async () => {
    setTasks(await tasksApi.listTasks());
  };

  useEffect(() => { load(); }, []);

  const onComplete = async (t) => {
    if (window.confirm('¿Marcar como completa?')) {
      await tasksApi.completeTask(t.id);
      load();
    }
  };

  const onDelete = async (t) => {
    if (window.confirm('¿Eliminar tarea?')) {
      await tasksApi.deleteTask(t.id);
      load();
    }
  };

  return (
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(t => (
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.nombre}</td>
            <td>{t.descripcion}</td>
            <td>{t.esta_completa ? 'Completa' : 'Pendiente'}</td>
            <td>
              <button onClick={() => onComplete(t)} disabled={t.esta_completa}>Completar</button>
              <button onClick={() => onDelete(t)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
