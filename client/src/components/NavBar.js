import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Nav, Navbar, } from "react-bootstrap";
import {BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE} from "../utils/consts";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    let navigate = useNavigate();
    function toAdmin() {
        navigate(ADMIN_ROUTE);
    }
    function toBasket() {
        navigate(BASKET_ROUTE);
    }

    function logout() {
        user.setUser({});
        user.setIsAuth(false);
        user.setIsAdmin(false)

    }
    function authorization(){
        navigate(LOGIN_ROUTE)
    }
    return (

        <Navbar bg="dark" variant="dark">
            <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Romasha</NavLink>
            { user.isAuth ?
                <Nav className="ml-auto">
                    <Button
                        variant={"outline-light"}
                        className="mr-2"
                        onClick={toBasket}
                    >
                       Cart
                    </Button>
                    {user.isAdmin ?
                        <Button
                            variant={"outline-light"}
                            onClick={toAdmin}
                        >
                            Admin Panel
                        </Button>
                        :
                        <div/>
                    }
                    <Button variant={'outline-light'} className="ml-2" onClick={logout}> Logout</Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: "white"}}>
                    <Button variant={'outline-light'}  onClick={authorization}>Authorization</Button>
                </Nav>
            }
        </Navbar>
    );

});

export default NavBar;