import { useState , forwardRef , useImperativeHandle } from 'react';


const Child = forwardRef((props , ref) => {

    const [counter , setCounter] = useState(0);


    const increaseCount = () => setCounter(counter + 1);


    useImperativeHandle(ref , ()=>({

        increaseChildCount(){
            increaseCount();
        }

    }) , [counter])

    return(
        <div>
            <h1>Child Component</h1>
            <span>Counter : </span>
            <span>{counter}</span>
        </div>
    )
});
export default Child;