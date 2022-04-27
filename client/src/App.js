import React, {useContext, useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./htpp/userAPI";
import {Backdrop, CircularProgress} from "@mui/material";


const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        check().then((data)=>{
            user.setUser(data);
            user.setIsAuth(true);
            if(data.role.replace(/\s/g, '')==="ADMIN"){
                user.setIsAdmin(true);
            }
        }).finally(()=>setLoading(false))
    },[user])

    if(loading){
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }
    return (
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
    );
})

export default App;
