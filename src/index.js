import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';



// IMPORTING COMPONENT
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)