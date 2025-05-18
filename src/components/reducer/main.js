import { useReducer } from "react";

import { reducer } from "./reducer";

const initialValue = {
    name : '',
    username : '',
    age : 1,
    password : ''
};



const Main = () => {


    const [state , dispatch] = useReducer(reducer , initialValue);


    const handleChange = ({target : { name , value }}) => dispatch({type : name , value : value });

    return(

        <div>
            <form>
                <input type='text' name='name' placeholder="Enter name" value={state.name} onChange={handleChange} />
                <input type='text' name='username' placeholder="Enter username" value={state.username} onChange={handleChange} />
                <input type='number' name='age' placeholder="Enter age" value={state.age} onChange={handleChange} />
                <input type='password' name='password' placeholder="Enter password" value={state.password} onChange={handleChange} />
            </form>
        </div>
    );
}
export default Main;