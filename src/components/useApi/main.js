import { lazy , Suspense } from 'react';


const UsersLists = lazy(() => import('./usersList'));


const Main = () => {
    
    return(

        <div>
            <h1 className='text-2xl text-black font-bold'>Users</h1>
            <Suspense fallback={<span>Loading...</span>}>
                <UsersLists />
            </Suspense>
        </div>

    );
}
export default Main;