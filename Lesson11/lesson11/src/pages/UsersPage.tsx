import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { User } from "../models/UserModel";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const baseUrl: string = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await fetch(`${baseUrl}/users`)
        .then((res) => res.json())
        .then((result) => {
            setUsers(result);
        });
    };
    fetchUsers();
  }, []);
  return (
    <>
      <div className="users">
        {users.map((item, index) => (
          <NavLink
            to={`/users/${item.id}`}
            key={item.id}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </>
  );
}
