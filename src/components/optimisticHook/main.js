import { useState , useOptimistic } from 'react';


const Main = () => {
    
    const [value , setValue] = useState('');
    const [users , setUsers] = useState([]);


    const [optimisticUsers , setOptimistic] = useOptimistic(users);



    const handleChange = ({target : { value : value1 }}) => setValue(value1);


    const formSubmit = () => {

        setOptimistic([...optimisticUsers , {name : value , pending : true}]);

        setTimeout(()=> {
            setUsers([...users , {name : value}]);
        } , 3000);

        setValue('');
    }

    return(

        <div>
            <input type='text' className='border-2 border-gray-200 rounded px-2 py-1' value={value} onChange={handleChange} placeholder='Enter title' />
            <button className='px-3 border-2 border-green-600 py-1' onClick={formSubmit}>Submit</button>
            <ol>
                {users.map((row , index) => (
                    <>
                        {row?.pending
                        ?
                        <li key={index} style={{'color' : 'green'}}>{row.name}</li>
                        :
                        <li key={index}>{row.name}</li>
                        }
                    </>
                ))}
            </ol>
        </div>

    );
}
export default Main;