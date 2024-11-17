export const loginReducer = (prevState , action) => {

    const { type , value } = action;

    switch(type){

        case 'name':

            return{
                ...prevState,
                'name' : value
            }
        
        case 'username':

            return{
                ...prevState,
                'username' : value
            }

        case 'email':

            return{
                ...prevState,
                'email' : value
            }

        case 'password':
            return{
                ...prevState,
                'password' : value
            }

    }
}