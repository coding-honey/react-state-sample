import React, { ChangeEvent, useState } from 'react';

export interface userD {
  id: number;
  name: string;
}

export default function UseStatePrint() {
  const [user, setUser] = useState<userD>({
    id: 0,
    name: '',
  });
  const [users, setUsers] = useState<userD[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      id: users.length,
      [e.target.name]: e.target.value,
    });
    // user.name: e.target.value; // ❌
    // setUser(user); // ❌
  }

  function handleClick() {
    setUser({
      ...user,
      name: '',
    });
    setUsers([...users, user]);
    // users.push(user); // ❌
    // setUsers(users); // ❌
  }

  return (
    <div>
      <label htmlFor={'name'}>name</label>
      <input id={'name'} name={'name'} value={user?.name} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <div>
        미리보기 : {user.id} / {user.name}
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} / {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
