import Parent from "./parent"


export default function Main(){

    return(

        <div style={{'display' : 'grid' , 'gridTemplateColumns' : '1fr 1fr' , 'justifyContent' : 'center'}}>
            <Parent />
        </div>
    )
}