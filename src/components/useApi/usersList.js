import { use } from "react";


import { api } from "./userApi";



const UsersLists = () => {

    const data = use(api());

    return(
        <ol>
            {data.map(row => (
                <li key={row.id}>{row.username}</li>
            ))}
        </ol>
    )
}
export default UsersLists;