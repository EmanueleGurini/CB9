"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link';

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => setUsers(res))
  }, []);

  return (
    <>
      <p>ciao sono home</p>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <Link href={`/pokemon/${user.id}`}>
                {user.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  );
}
