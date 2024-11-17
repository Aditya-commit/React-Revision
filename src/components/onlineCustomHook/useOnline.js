import { useState , useEffect } from 'react';


export function useOnline(){

    const [isOnline , setIsOnline] = useState(true);


    const handleNetworkOnline = () => setIsOnline(true);
    const handleNetworkOffline = () => setIsOnline(false);
    
    useEffect(()=> {

        window.addEventListener('online' , handleNetworkOnline);
        window.addEventListener('offline' , handleNetworkOffline);


        return function cleanup(){

            window.removeEventListener('online' , handleNetworkOnline);
            window.removeEventListener('offline' , handleNetworkOffline);
        }

    },[]);

    return isOnline;
}