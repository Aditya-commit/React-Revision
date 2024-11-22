import { useState , useCallback } from 'react';


import Input from './input';


const Main = () => {

	const [version , setVersion] = useState(0);


	const resetState = useCallback(() => setVersion(v => v + 1) , []);


	return(

		<>
			<Input key={version} />
			<button onClick={resetState}>Reset</button>
		</>
	)


}
export default Main;