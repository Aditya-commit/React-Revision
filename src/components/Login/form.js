import { useReducer } from 'react';
import PropTypes from 'prop-types';

import Input from './input';

import { loginReducer } from './reducer/login_reducer';


const initialValue = {
    'name' : '',
    'username' : '',
    'email' : '',
    'password' : ''
}




const Form = () => {


    const [state , dispatch] = useReducer(loginReducer , initialValue);


    const handleInputChange = (event , category) => dispatch({type : category , value : event.target.value})

    return(
        <div style={{'display' : 'flex' , 'columnGap' : 6 , 'alignContent' : 'center'}}>
            <Input type='text' placeholder='Enter your name' value={state.name} category='name' handleInputChange={handleInputChange} />
            <Input type='text' placeholder='Enter username' value={state.username} category='username' handleInputChange={handleInputChange} />
            <Input type='email' placeholder='Enter your email' value={state.email} category='email' handleInputChange={handleInputChange} />
            <Input type='password' placeholder='Enter your password' value={state.password} category='password' handleInputChange={handleInputChange} />
            <button>Add User</button>
        </div>
    )
}
export default Form;