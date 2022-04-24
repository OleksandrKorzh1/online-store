import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {publicRoutes,authRoutes} from "../routes";
import {Context} from "../index";
import NotFound from "../pages/NotFound"
import {observer} from "mobx-react-lite";


const AppRouter =observer( () => {
    const {user}=useContext(Context);
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path,Component})=>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {
                publicRoutes.map(({path,Component})=>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route
                path="*"
                element={<NotFound/>}
            />
        </Routes>
    );
});

export default AppRouter;