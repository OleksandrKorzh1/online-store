import React from 'react';
import {Button, Image} from "react-bootstrap";
import Imac from '../assets/Imac.jpg'
import "../index.css";
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const Home = () => {
    const navigate=useNavigate();
    return (
        <div className={"container"}>
            <div style={{width:"50%"}}>
                <div className={"cont"}>
                    <span className={'info'}> New Arrivals</span><br/>
                    <span className={"info_2"}> <b>Apple IMAC 27´´ 5K I7</b></span><br/>
                    <span className={"info_3"}>Retina display:Everything looks better
                    on a Retina display, with one billion colors and 500 nits brightness.
                    Photos and graphics pop out of the screen. The text is very sharp.
                    For the first time, the 27-inch iMac features True Tone technology for a more natural viewing
                    experience and a nano-textured glass option to keep glare to a minimum.</span>
                </div>
                <Button variant={"outline-dark"} className={"btn_"} onClick={()=>navigate(SHOP_ROUTE)}>Shop now</Button>
            </div>
            <Image className={"float-right image"} src={Imac} alt={"a"}/>

        </div>
    );
};

export default Home;