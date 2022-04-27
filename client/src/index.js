import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/userStore";
import DeviceStore from "./store/deviceStore";
import TypeStore from "./store/typeStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null);
root.render(
    <React.StrictMode>
    <Context.Provider value={{
        user: new UserStore(),
        device:new DeviceStore()
    }}>
        <App/>
    </Context.Provider>
    </React.StrictMode>
);

