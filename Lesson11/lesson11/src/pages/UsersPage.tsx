import { Link, NavLink, Outlet } from "react-router-dom";
import { users } from "../scrypts/users";

export default function UsersPage() {
  return (
    <>
      <div className="users">
        {users.map((item, index) => (
          <NavLink to={`/users/${index}`} key={index} className={({isActive}) => isActive ? 'active' : ''}>
            Link:{item}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </>
  );
}
