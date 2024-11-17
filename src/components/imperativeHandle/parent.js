import { useRef } from 'react';


import Child from './child';

export default function Parent(){

    const ref = useRef(null);

    const increaseCount = () => ref.current.increaseChildCount();


    return(
        <>
            <div style={{'borderRight' : '1px solid lightgray' , 'marginRight' : 23}}>
                <h1>
                    Parent Component
                </h1>
                <button onClick={increaseCount}>Increase</button>
            </div>
            <Child ref={ref} />
        </>
    )
}