import { useState , useCallback } from 'react';


import Button from './button';



const Main = () => {


	const [counter , setCounter] = useState(0);
	const [counter2 , setCounter2] = useState(0);



	// HERE THIS WILL CREATE A NEW INSTANCE OF THE FUNCTION ONLY WHEN THE COUNTER VARIABLE IS CHANGED
	
	// const incrementFunc = useCallback(() => setCounter(counter + 1) , [counter]);
	
	// OR
		
	const incrementFunc = useCallback(()=>setCounter(c => c+ 1) , []); // I LIKE THIS APPROACH MORE AS IT INCREASES THE PERFORMACE SINCE EVEN IF THE COUNTER STATE IS CHANGED IT WILL STILL NOT RE RENDER THE BUTTON COMPONENT SINCE THE INSTANCE WILL NOT CHANGE

	

	// THE COMPONENT RECEIVING THIS FUNCTION AS A PROP WILL ALWAYS RENDER CAUSE IT IS REINITIALISING EVEN WHEN counter IS CHANGED SO THE COMPONENT RECIEVING IT AS A PROP WILL CONSIDER IT AS A NEW INSTANCE OF FUNCTION (MEANS NEW PROP) EVERYTIME THE counter STATE CHANGED IN THE PARENT COMPONENT EVEN THOUGH WE ARE USING USEMEMO
	const incrementFunc2 = () => setCounter2(counter2 + 1);


	return(
	
		<>
			<div style={{'display' : 'flex' , 'flexDirection' : 'column' , 'rowGap':9}}>
				<span>Counter : {counter}</span>
				<span>Counter : {counter2}</span>
			</div>
			<Button incrementFunc={incrementFunc} />
			<Button incrementFunc={incrementFunc2} />
		</>

	);
}
export default Main;