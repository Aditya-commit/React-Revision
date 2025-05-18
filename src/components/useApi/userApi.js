'use server';

export const api = async () => {

    try{

        const result = await fetch('https://jsonplaceholder.typicode.com/users');

        if(result){

            return result;
        }
        
        throw Error('Error occured while fetching users');
    }
    catch(error){

        throw Error(error);
    }
}