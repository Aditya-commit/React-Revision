// YOU MIGHT BE THINKING THAT WHY DON'T WE USE USEDEFFEREDVALUE HOOK HERE . IT'S BECAUSE IT BUILD TO WORK WITH PROPS THAT ARE PASSED FROM THE PARENT COMPONENT TO THE CHILD COMPONENT YOU CAN STILL USE IT WITH STATE WITH SOME WORKAROUND BUT THAT IS NOT ITS PRIMARY PURPOSE

import { useState, useTransition } from 'react';

const Main = () => {

    const [value , setValue] = useState('');
    const [list , setList] = useState([]);



    const [isPending , startTransition] = useTransition();



    // WITHOUT TRANSITION

    /*const handleChange = event => {

        setValue(event.target.value);

        let l = [];

        const SIZE = 2000;

        for(let i=0 ; i < SIZE ; i++){
            l.push(event.target.value);
        }

        setList(l);
    }*/

    // --------------------------------------------


    // WITH TRANSITION

    const handleChange = event => {

        setValue(event.target.value);

        startTransition(()=>{

            /* ALL THE CODE INSIDE THIS IS A LOW PRIORITY TASK DUE TO WHICH ITS MAIN PRIORITY WOULD BE TO SET THE VALUE STATE AND UPDATE THE UI FOR THIS VALUE STATE INSTEAD OF UPDAING THE LIST STATE AND UPDATING AT ONCE . 
            THIS DOES NOT MEAN THAT YOUR APPLICATION WILL NOT LAG IF IT IS LAGGING DUE TO THIS PIECE OF CODE BUT IT CAN IMPROVE THE PERFORMANCE BY 50% .

            WARNING : USE THIS HOOK AS LESS AS POSSIBLE CAUSE IT CAUSES MORE RENDERS AS IT TRIES TO UPDATE THE COMPONENT WITH THE MORE PRIORITISED STATE UPDATES AND THEN isPending VALUE RENDERS TWICE ONE WITH TRUE AND ONE WITH FALSE AND THEN WHEN THE STATE THAT IS LESS PRIORITISED RENDERS THE COMPONENT
            _______
            */

            let l = [];

            const SIZE = 20000;

            for(let i=0 ; i < SIZE ; i++){
                l.push(event.target.value);
            }

            setList(l);
        })
    }


    return(
        <div>
            <h1>Use Transition hook</h1>

            <div>

                <input type='text' value={value} onChange={handleChange} />

                {isPending
                ?
                <h2>🌀</h2>
                :
                <ol>
                    {list.map((row , index) => <li key={index}>{row}</li>)}
                </ol>
                }

            </div>
        </div>
    )
};
export default Main; 