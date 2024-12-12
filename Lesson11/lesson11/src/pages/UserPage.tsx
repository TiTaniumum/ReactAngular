import { Link, useParams } from "react-router-dom";
import { users } from "../scrypts/users";

export default function UserPage(){
    const userId = Number(useParams<{userId: string}>().userId);
    return <>
        <Link to='/users'>goBack</Link>
        <div>Username: {users[userId]}</div>
    </>
}