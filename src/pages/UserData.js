import React, { useEffect, useState } from 'react';
import * as auth from '../api/auth';

export default function UserData() {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const me = await auth.me();
        setUser(me);
      } catch {}
    })();
  }, []);

  return (
    <div>
      <div>
        <label>Nombre</label>
        <input value={user.nombre || ''} readOnly />
      </div>
      <div>
        <label>Apellido</label>
        <input value={user.apellido || ''} readOnly />
      </div>
    </div>
  );
}
