import { memo } from 'react';
import PropTypes from 'prop-types';


const IncrementButton = ({incrementFunc}) => {


	// HERE WE HAVE USED MEMO WHICH WILL TELL THE REACT FUNCTION TO RETURN THE SAME VALUE IN THIS CASE RETURN THE SAME JSX IF WE ARE NOT GETTING THE NEW PROP IN THIS CASE NEW INSTANCE OF THE incrementFunc PROP


	console.log('slow function started');

	let i = 0;


	while(i < 1000000000){

		i++;
	}

	console.log('slow function finished');


	return	<button onClick={incrementFunc}>+</button>;
}

IncrementButton.propTypes = { incrementFunc : PropTypes.func };

export default memo(IncrementButton);