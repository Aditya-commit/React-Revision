import PropTypes from 'prop-types';


const Input = ({category , type , placeholder , value , handleInputChange}) => {

    return(
        <input type={type} placeholder={placeholder} style={{'fontSize' : 15 , 'padding' : 5 , 'borderRadius' : 3 , 'caretColor' : 'lightblue'}} value={value} onChange={e => handleInputChange(e , category)} />
    )
}
Input.propTypes = {
    type : PropTypes.oneOf(['text' , 'email' , 'password']),
    placeholder : PropTypes.string,
    value : PropTypes.string.isRequired,
    category : PropTypes.oneOf(['name' , 'username' , 'email' , 'password']),
    handleInputChange : PropTypes.func
}
export default Input;