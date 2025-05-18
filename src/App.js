// IMPORTING COMPONENTS
// import Main from './components/Login/form';
// import Main from './components/imperativeHandle/main';
// import Main from './components/customHooks/main';
// import Main from './components/useCallbackTest/main';
// import Main from './components/state_reset/main';
// import Main from './components/transition/main';
// import Main from './components/optimisticHook/main';
// import Main from './components/reducer/main';
import Main from './components/useApi/main';




import { useOnline } from './components/onlineCustomHook/useOnline';




export default function App() {

    const online = useOnline();

    return(
        <>
            <Main />
            {!online && (
                <div style={{'position' : 'fixed' , 'bottom' : 0 , 'left' : 0 , 'width' : '100%' , 'borderTop' : '1px solid gray' , 'padding' : 3 , 'textAlign' : 'center' , 'background' : '#ffdbdb'}}>
                    <span style={{'fontFamily' : 'monospace' , 'color' : '#a90000' , 'fontSize' : 17}}>You are offline</span>
                </div>
            )}
        </>
    );
}