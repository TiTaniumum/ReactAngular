import { Link, useParams } from "react-router-dom";
import { defaultUser, User } from "../models/UserModel";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function UserPage() {
  const [user, setUsers] = useState<User | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const userId = Number(useParams<{ userId: string }>().userId);
  const baseUrl: string = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    // const fetchUsers = async () => {
    //   setLoader(true);
    //   const fetchedUsers = await fetch(`${baseUrl}/users/${userId}`)
    //     .then((res) => res.json())
    //     .then((result: User) => {
    //       setUsers(result);
    //     })
    //     .catch((err) => {
    //       setError(true);
    //       throw err;
    //     })
    //     .finally(() => {
    //       setLoader(false);
    //     });
    // };
    // fetchUsers();
    axios.get(`${baseUrl}/users/${userId}`).then(res=>{
        console.log(res)
        setUsers(res.data);
    })
  }, [userId]);
  return (
    <>
      <Link to="/users">goBack</Link>
      {loader && <p>Loading...</p>}
      {error && <p>ERROR</p>}
      {user && (
        <div className="user">
          <p>Name: {user.name}</p>
          <p>username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </>
  );
}
