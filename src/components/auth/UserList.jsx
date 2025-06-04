import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map((doc) => ({
          uid: doc.id,
          ...doc.data(),
        }));
        setUsers(usersList);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="text-white">Cargando usuarios...</div>;
  if (users.length === 0) return <div className="text-white">No hay usuarios registrados.</div>;

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <h2 className="text-xl text-white font-bold mb-4">Usuarios registrados</h2>
      <input
        type="text"
        placeholder="Buscar usuario..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 rounded-md w-full"
      />
      <ul className="flex flex-col gap-2">
        {filteredUsers.length === 0 ? (
          <li className="text-gray-400">No se encontraron usuarios.</li>
        ) : (
          filteredUsers.map((user) => (
            <li key={user.uid} className="bg-neutral-800 p-3 rounded-md text-white flex items-center gap-2">
              <span className="font-semibold">@{user.username}</span>
              <span className="text-gray-400 ml-2 text-sm">{user.email}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default UsersList;
