import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {AiFillInfoCircle} from "react-icons/ai";
import {ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {FaProductHunt} from "react-icons/fa";
import {RiAdminFill} from "react-icons/ri";

export const SidebarData = [
    {
        title: 'Home',
        path: HOME_ROUTE,
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: SHOP_ROUTE,
        icon: <FaProductHunt />,
        cName: 'nav-text'
    },
    {
        title: 'Cart',
        path: BASKET_ROUTE,
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title:'Admin Panel',
        path: ADMIN_ROUTE,
        icon: <RiAdminFill/>,
        cName: 'nav-text'
    },
    {
        title:'About',
        path: ABOUT_ROUTE,
        icon: <AiFillInfoCircle />,
        cName: 'nav-text'
    },
];
