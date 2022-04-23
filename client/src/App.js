import React, {useContext, useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./htpp/userAPI";
import {Spinner} from "react-bootstrap";


const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check().then(data=>{
            user.setUser(data);
            user.setIsAuth(true);
            user.setIsAdmin(true);
        }).finally(()=>setLoading(false))
    },[])

    if(loading){
        return <Spinner animation={"grow"}/>
    }
    return (
        <React.StrictMode>
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        </React.StrictMode>
    );
})

export default App;
