import { useState , useEffect } from 'react';



export function useDelayedValue(position , delay){

    let timeoutid = null;

    const [delayedPosition , setDelayedPosition] = useState({ x : 0 , y : 0});


    useEffect(()=> {

        timeoutid = setTimeout(()=>{
            setDelayedPosition({x : position?.x , y : position?.y});
        },[delay]);

    },[position]);

    return delayedPosition;
}