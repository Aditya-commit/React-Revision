import { useState , useEffect } from 'react';




// WE CAN EVEN BUILD CUSOMT HOOKS THAT DOES NOT RETURN ANYTHING LIKE USEEFFECT HOOK AND WILL BE EXECUTED THE SAME WAY



export function usePointerPosition(){

    const [position , setPosition] = useState({x : 0 , y : 0});


    const handlePointerMove = ({x , y}) => setPosition({x : x , y : y});

    // const handlePointerMove = event => console.log(event);

    useEffect(()=>{

        window.addEventListener('pointermove' , handlePointerMove);

        return () => window.removeEventListener('pointermove' , handlePointerMove);

    },[]);

    return position;
}